🛫 Visa Alert Management System

A full-stack web application built to manage visa slot alerts.
Users can create, view, filter, update, and delete visa alerts in real time.

This project demonstrates REST API development, database integration, middleware usage, and frontend–backend communication using modern web technologies.

🚀 Tech Stack
Frontend

React (Vite)

Axios

CSS

Backend

Node.js

Express.js

MongoDB Atlas (Cloud Database)

Mongoose

Middleware & Tools

dotenv (environment variables)

morgan (HTTP request logging)

cors

nodemon

📁 Project Structure

backend/
 ├── config/
 ├── middleware/
 ├── models/
 ├── routes/
 └── server.js

frontend/visa-alert-frontend
 ├── components/
 ├── pages/
 └── App.jsx

📦 Features

Create visa alerts

View all alerts

Filter alerts by country and status

Update alert details/status

Delete alerts

Input validation middleware

Centralized error handling

Proper HTTP status codes

MongoDB cloud database integration

🧠 Data Model

Each alert contains:

{
  "country": "Germany",
  "city": "Berlin",
  "visaType": "Student",
  "status": "Active",
  "createdAt": "Auto-generated date"
}

🔗 API Endpoints
Method	Endpoint	Description
GET	/alerts	Get all alerts
GET	/alerts?country=&status=	Filter alerts
POST	/alerts	Create new alert
PUT	/alerts/:id	Update alert
DELETE	/alerts/:id	Delete alert
⚙️ How to Run Locally
1️⃣ Clone Repository
git clone <your-repository-link>
cd visa-alert-system

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string


Run backend server:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🧩 Design Decisions

MongoDB Atlas used for scalable cloud storage

Mongoose schema ensures structured and validated data

Custom middleware used for request validation

Centralized error handler improves maintainability

RESTful API structure followed for clarity

🔮 Future Improvements

Authentication (JWT)

Pagination

Role-based access control

Deployment (Render / Vercel)

Real-time alerts using WebSockets

🤖 Use of AI

AI tools were used for debugging support, understanding best practices, and improving code structure.
Core logic, API design, and system integration were implemented manually.

👨‍💻 Author

Rohit Pathak
B.Tech CSE Student
Aspiring Full Stack Developer (MERN)
⭐ This project showcases practical backend development skills, clean API design, and full-stack integration.