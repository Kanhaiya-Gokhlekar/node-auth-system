# 🔐 Node.js Authentication System

This project is a secure user authentication system built with Node.js, Express, MongoDB, and JWT. It supports Signup, Login, Forgot Password (with email reset link), and Reset Password functionality.

## 📌 Features

- ✅ Signup with First Name, Last Name, Email, and Password
- ✅ Secure JWT-based Login
- ✅ Get user details using JWT
- ✅ Forgot Password flow with reset link sent via email
- ✅ Reset Password using token (valid for 5 minutes)
- ✅ Hashed passwords (bcrypt)
- ✅ Email integration using Nodemailer + Mailtrap
- ✅ Fully documented in Postman

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT + Bcrypt
- **Mailing**: Nodemailer with Mailtrap
- **Documentation**: Postman Collection

## 📂 Project Structure

code_for_Tomorrow/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── .env
│ ├── server.js
│ └── ...
└── public/
└── reset-password.html


## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME/backend

2. Install Dependencies
npm install

3. Set up Environment Variables
Create a .env file in the backend/ directory with the following:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5000/public/reset-password.html
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=587
EMAIL_USER=your_mailtrap_user
EMAIL_PASS=your_mailtrap_pass

4. Run the Server

npm start

✅ Completion Status (as per task)
 Signup

 Login with JWT

 Get user details

 Forgot Password (email reset link)

 Reset Password (token expires in 5 mins)

 Password encryption

 Postman documentation

 Clean code and naming conventions

📧 Contact
Kanhaiya Gokhlakar
Email: kgokhlekar05@gmail.com
