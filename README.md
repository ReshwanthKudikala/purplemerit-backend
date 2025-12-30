# Mini User Management System

## Project Overview & Purpose

This project is a **Mini User Management System** built as part of the  
**Purple Merit Technologies – Backend Developer Intern Assessment**.

The application demonstrates secure authentication, role-based access control (RBAC),
and user lifecycle management using a modern full-stack architecture.

The goal of this project is to showcase:
- Secure backend API design
- JWT-based authentication
- Role-based authorization (admin vs user)
- Clean frontend integration with protected routes
- Production-ready deployment practices

---

## Tech Stack Used

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- Jest & Supertest (API testing)
- Deployment: Railway

### Frontend
- React (Vite)
- React Router
- Context API
- Axios
- Tailwind CSS
- Deployment: Netlify

---

## Project Structure

### Backend
backend/
├── tests/
│ └── auth.test.js
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── user.controller.js
│ │ └── admin.controller.js
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ └── role.middleware.js
│ ├── models/
│ │ └── user.model.js
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── user.routes.js
│ │ └── admin.routes.js
│ ├── utils/
│ │ ├── hash.js
│ │ └── jwt.js
│ ├── app.js
│ └── server.js
├── .gitignore
├── package.json
└── package-lock.json

shell

### Frontend
frontend/
├── public/
│ └── vite.svg
├── src/
│ ├── api/
│ │ └── axios.js
│ ├── auth/
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ └── ProtectedRoute.jsx
│ ├── components/
│ │ └── Navbar.jsx
│ ├── pages/
│ │ ├── AdminDashboard.jsx
│ │ └── Profile.jsx
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
└── README.md

yaml

---

## Setup Instructions

### Backend Setup
```bash
cd backend
npm install
Create a .env file inside the backend folder:

makefile
PORT=
MONGO_URI=
JWT_SECRET=
Run the backend locally:

bash
npm run dev
Frontend Setup
bash
cd frontend
npm install
npm run dev
Create a .env file inside the frontend folder:

makefile
VITE_API_BASE_URL=
Environment Variables
Backend
PORT

MONGO_URI

JWT_SECRET

Frontend
VITE_API_BASE_URL

⚠️ All sensitive values are stored in .env files and excluded from version control using .gitignore.

Deployment Instructions
Backend Deployment (Railway)
Created a Railway project

Connected the GitHub repository

Added required environment variables in Railway dashboard

Enabled automatic deployments on push

Frontend Deployment (Netlify)
Connected the GitHub repository

Selected /frontend directory as the base directory

Build command: npm run build

Publish directory: frontend/dist

Added VITE_API_BASE_URL environment variable

Triggered production build and deployment

Live Deployment Links
Frontend (Netlify):
https://purplemerit-user-management.netlify.app/

Backend (Railway):
https://purplemerit-backend-production.up.railway.app/

API Base URL:
https://purplemerit-backend-production.up.railway.app/api

API Documentation
Authentication APIs
Signup
POST /api/auth/signup

Request:

json
{
  "fullName": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
Response:

json
{
  "success": true,
  "token": "jwt_token_here"
}
Login
POST /api/auth/login

Request:

json
{
  "email": "test@example.com",
  "password": "password123"
}
Response:

json
{
  "success": true,
  "token": "jwt_token_here"
}
User APIs (Protected)
Get Current User
GET /api/users/me

Response:

json
{
  "success": true,
  "data": {
    "fullName": "Test User",
    "email": "test@example.com",
    "role": "user",
    "status": "active"
  }
}
Update Profile
PUT /api/users/profile

Request:

json
{
  "fullName": "Updated Name",
  "email": "updated@example.com"
}
Change Password
PUT /api/users/change-password

Request:

json
{
  "currentPassword": "oldPassword",
  "newPassword": "newPassword"
}
Admin APIs (RBAC Protected)
Get All Users
GET /api/admin/users?page=1

Response:

json
{
  "users": [],
  "totalPages": 3
}
Activate User
PATCH /api/admin/users/:id/activate

Deactivate User
PATCH /api/admin/users/:id/deactivate

Deliverables
GitHub Repository

Single public repository

Separate /frontend and /backend folders

Proper incremental commit history

No sensitive data committed

Live Deployment

Backend deployed on Railway

Frontend deployed on Netlify

Database hosted on MongoDB Atlas

Walkthrough Video (3–5 minutes)

User signup & login

JWT authentication

Role-based access control

Admin dashboard actions

Backend API demo

Live deployed links

📌 Video Link: (To be added)

Bonus Implementations
Backend unit & integration tests

Secure password hashing and JWT handling

Clean, modular project architecture

Author
Reshwanth Kudikala
B.Tech – Computer Science & Engineering
Purple Merit Technologies – Backend Developer Intern Assessment