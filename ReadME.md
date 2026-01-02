# CRESIA

**Systems for Scale. Foundations for Founders.**

CRESIA is a full-stack web platform engineered to help founders build durable digital foundations instead of fragile launches. The project combines a premium, motion-driven frontend with a production-grade backend powered by MongoDB.

## ✨ Features

- **High-end, animation-rich frontend**: Built with React and Framer Motion.
- **Modular and scalable backend**: Powered by Node.js and Express.
- **MongoDB persistence**: Data integrity via Mongoose.
- **Secure API validation**: Schema validation using Zod.
- **Email notifications**: Automatic alerts for discovery call submissions.
- **Clean architecture**: Strict separation of frontend and backend concerns.
- **Deployment-ready**: Optimized for modern cloud hosting.

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion
- Lucide Icons

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Zod
- Nodemailer
- dotenv

## 📁 Project Structure
```
CRESIA/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── validators/
│   │   └── middleware/
│   ├── server.js
│   ├── app.js
│   └── package.json
│
└── README.md
```

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cresia.git
cd cresia
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```
PORT=5050
MONGO_URI=mongodb://127.0.0.1:27017/cresia
MAIL_USER=team.cresia@gmail.com
MAIL_PASS=your_app_password
```

Start MongoDB (macOS example):
```bash
brew services start mongodb-community@7.0
```

Run the backend:
```bash
npm run dev
```

**Expected output**: `MongoDB connected | Server running on port 5050`

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/`:
```
VITE_API_URL=http://localhost:5050/api
```

Run the frontend:
```bash
npm run dev
```

## 🔗 API Endpoints

### POST /api/contact

Submit a discovery call request.

**Request Body**:
```json
{
  "name": "Founder Name",
  "email": "founder@startup.com",
  "stage": "Idea / Pre-Revenue"
}
```

**Response**:
```json
{
  "success": true,
  "id": "mongodb_object_id"
}
```

## 🛠 Environment Variables

| Variable | Description | Location |
|----------|-------------|----------|
| `PORT` | Backend server port | Backend |
| `MONGO_URI` | MongoDB connection string | Backend |
| `MAIL_USER` | Email sender address | Backend |
| `MAIL_PASS` | Email app-specific password | Backend |
| `VITE_API_URL` | Backend API base URL | Frontend |

## 📦 Deployment

- **Frontend**: Vercel
- **Backend**: Railway / Render / Fly.io
- **Database**: MongoDB Atlas

**Note**: `node_modules` and `.env` files are excluded from version control.

## 🧠 Philosophy

> "Don't just launch. Build a foundation."

CRESIA is designed for founders who value clarity, scalability, and long-term systems over short-term hype.

## 📄 License

This project is proprietary.

**All rights reserved © 2026 CRESIA Systems.**
