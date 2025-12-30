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
- Deployment: Vercel / Netlify

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
Copy code

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
Copy code

---

## Setup Instructions

### Backend Setup

```bash
cd backend
npm install
Create a .env file inside the backend folder with the following variables:

env
Copy code
PORT=
MONGO_URI=
JWT_SECRET=
Run the backend locally:

bash
Copy code
npm run dev
Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Create a .env file inside the frontend folder:

env
Copy code
VITE_API_BASE_URL=
Environment Variables
Backend
PORT

MONGO_URI

JWT_SECRET

Frontend
VITE_API_BASE_URL

⚠️ All sensitive values are stored in .env files and excluded from version
control using .gitignore.

Deployment Instructions
Backend Deployment (Railway)
Created a Railway project

Connected the GitHub backend repository

Added required environment variables in the Railway dashboard

Enabled automatic deployments on push

Frontend Deployment (Vercel / Netlify)
Connected the GitHub repository

Selected the /frontend directory as the project root

Added VITE_API_BASE_URL environment variable

Triggered production build and deployment

Live Deployment Links
Backend API
https://purplemerit-backend-production.up.railway.app

Frontend Application
(To be added after frontend deployment)

API Documentation / Postman Collection
(To be added)

API Documentation
Authentication APIs
Signup
POST /api/auth/signup

Request:

json
Copy code
{
  "fullName": "Test User",
  "email": "test@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "success": true,
  "token": "jwt_token_here"
}
Login
POST /api/auth/login

Request:

json
Copy code
{
  "email": "test@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "success": true,
  "token": "jwt_token_here"
}
User APIs
Get Current User
GET /api/users/me
(Protected)

Response:

json
Copy code
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
Copy code
{
  "fullName": "Updated Name",
  "email": "updated@example.com"
}
Change Password
PUT /api/users/change-password

Request:

json
Copy code
{
  "currentPassword": "oldPassword",
  "newPassword": "newPassword"
}
Admin APIs (RBAC Protected)
Get All Users
GET /api/admin/users?page=1

Response:

json
Copy code
{
  "users": [],
  "totalPages": 3
}
Activate User
PATCH /api/admin/users/:id/activate

Deactivate User
PATCH /api/admin/users/:id/deactivate

Deliverables
1. GitHub Repository
Single public GitHub repository

Separate /frontend and /backend folders

Proper incremental commit history

No sensitive data committed

.env files excluded using .gitignore

2. Live Deployment Links
Backend deployed on Railway

Frontend deployed on Vercel / Netlify

Database hosted on MongoDB Atlas

3. Walkthrough Video (3–5 minutes)
The walkthrough video demonstrates:

User signup and login

JWT-based authentication

Role-based access control (admin vs user)

Admin dashboard (activate/deactivate users)

User profile update and password change

Backend API demonstration using browser or Postman

Live deployed application links

📌 Video Link: (To be added)

Bonus Implementations
Backend unit and integration tests using Jest and Supertest

Secure password hashing and token handling

Clean project architecture with separation of concerns

Author
Reshwanth Kudikala
B.Tech – Computer Science & Engineering
Purple Merit Technologies – Backend Developer Intern Assessment