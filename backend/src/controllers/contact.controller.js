import Contact from '../models/Contact.model.js'
import { transporter } from '../config/mail.js'

export async function submitContact(req, res) {
  const { name, email, stage } = req.body

  const contact = await Contact.create({
    name,
    email,
    stage,
  })

  await transporter.sendMail({
    from: `"CRESIA" <${process.env.MAIL_USER}>`,
    to: 'team.cresia@gmail.com',
    subject: 'New Discovery Call Request',
    text: `
New Discovery Call Request

Name: ${name}
Email: ${email}
Stage: ${stage}
    `,
  })

  res.status(201).json({
    success: true,
    id: contact._id,
  })
}
