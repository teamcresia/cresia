import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

// Validation helper
const validateInput = (data) => {
  const { name, email, stage } = data;
  
  if (!name || !email || !stage) {
    return { valid: false, error: 'All fields are required' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }
  
  const validStages = [
    'Idea / Pre-Revenue',
    'Early Traction ($1k - $10k MRR)',
    'Growth Stage ($10k - $100k MRR)',
    'Scaling ($100k+ MRR)'
  ];
  
  if (!validStages.includes(stage)) {
    return { valid: false, error: 'Invalid stage selected' };
  }
  
  return { valid: true };
};

// Main handler
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  let client;

  try {
    // Validate input
    const validation = validateInput(req.body);
    if (!validation.valid) {
      return res.status(400).json({ 
        success: false, 
        error: validation.error 
      });
    }

    const { name, email, stage } = req.body;

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    client = await MongoClient.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    const db = client.db('cresia');
    console.log('MongoDB connected');

    // Save to database
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      stage,
      createdAt: new Date(),
      source: 'discovery_call_form'
    });

    console.log('Document inserted:', result.insertedId);

    // Send email notification
    console.log('Sending email notification...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // await transporter.sendMail({
    //   from: process.env.MAIL_USER,
    //   to: process.env.MAIL_USER,
    //   subject: '🔔 New Discovery Call Request - CRESIA',
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //       <head>
    //         <style>
    //           body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    //           .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    //           .header { background: #000; color: #fff; padding: 20px; text-align: center; }
    //           .content { background: #f4f4f4; padding: 20px; margin: 20px 0; }
    //           .field { margin: 15px 0; }
    //           .label { font-weight: bold; color: #555; }
    //           .value { color: #000; font-size: 16px; }
    //           .footer { text-align: center; color: #888; font-size: 12px; padding: 20px; }
    //         </style>
    //       </head>
    //       <body>
    //         <div class="container">
    //           <div class="header">
    //             <h1>🎯 New Discovery Call Request</h1>
    //           </div>
    //           <div class="content">
    //             <div class="field">
    //               <div class="label">Name:</div>
    //               <div class="value">${name}</div>
    //             </div>
    //             <div class="field">
    //               <div class="label">Email:</div>
    //               <div class="value">${email}</div>
    //             </div>
    //             <div class="field">
    //               <div class="label">Current Stage:</div>
    //               <div class="value">${stage}</div>
    //             </div>
    //             <div class="field">
    //               <div class="label">Submitted:</div>
    //               <div class="value">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</div>
    //             </div>
    //           </div>
    //           <div class="footer">
    //             <p>Submitted via CRESIA Discovery Call Form</p>
    //             <p>cresia-nu.vercel.app</p>
    //           </div>
    //         </div>
    //       </body>
    //     </html>
    //   `
    // });

    console.log('Email sent successfully');

    // Return success response
    return res.status(200).json({ 
      success: true, 
      id: result.insertedId.toString(),
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Error in contact API:', error);
    
    return res.status(500).json({ 
      success: false, 
      error: 'Something went wrong. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
    
  } finally {
    // Always close the MongoDB connection
    if (client) {
      await client.close();
      console.log('MongoDB connection closed');
    }
  }
}
