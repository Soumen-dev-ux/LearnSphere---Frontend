## 📘 LearnSphere – Online Learning Platform
## 🌐 Live Demo
	• Frontend (Vercel): https://learnsphere-topaz.vercel.app/
	• Backend (Render): https://learnsphere-mmou.onrender.com/

## 📌 Project Overview
LearnSphere is a full-stack MERN-based online learning platform where users can browse courses, view course details, enroll in courses, and track their learning progress. The platform also includes an admin panel that allows administrators to create and manage courses.
This project demonstrates authentication, role-based access control, protected routes, REST APIs, and full deployment using modern tools.

## 🛠️ Tech Stack
## Frontend
	• React (Vite)
	• React Router DOM
	• Axios
	• Tailwind CSS
## Backend
	• Node.js
	• Express.js
	• MongoDB Atlas
	• JWT Authentication
## Deployment
	• Frontend: Vercel
	• Backend: Render

## ✨ Features
## 👤 User Features
	• User Signup & Login
	• Browse all courses
	• View course details
	• Enroll in courses
	• View enrolled courses in dashboard
## 🛡️ Admin Features
	• Secure admin authentication
	• Role-based access control
	• Create new courses
	• Admin-only protected routes

## 🔐 Authentication & Authorization
	• JWT-based authentication
	• Tokens stored in localStorage
	• Protected routes using middleware
	• Admin access verified via user role inside JWT

## ⚙️ Environment Variables
## Backend (.env)
MONGO_URI=mongodb+srv://soumenpore_db_user:Soumen%402006@cluster0.shjrbsv.mongodb.net/LearnSphere?retryWrites=true&w=majority
JWT_SECRET=learnsphere_secret_12345

## Frontend (Vercel Environment Variables)
VITE_API_BASE_URL=https://https://learnsphere-mmou.onrender.com//api
	⚠️ Note: All frontend environment variables must start with VITE_

## 🚀 Run Project Locally
## Backend Setup
cd backend
npm install
npm run dev
## Frontend Setup
cd frontend
npm install
npm run dev

Frontend will run on:
http://localhost:5173
Backend will run on:
http://localhost:5000


## 📚 Learning Outcomes
	• Hands-on experience with MERN stack
	• Implemented JWT authentication & authorization
	• Built REST APIs
	• Managed role-based access
	• Deployed full-stack application

## 👨‍💻 Author
Soumen Pore

## ✅ Project Status
✔ Completed
✔ Deployed
✔ Submission Ready
