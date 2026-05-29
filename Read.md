# 📰 AI-Powered Personalized News Recommendation System

An intelligent news recommendation platform that delivers personalized news content based on user interests and behavior analytics.

This project combines modern web technologies, cloud databases, and machine learning concepts to provide a personalized news-reading experience.

---

## 🚀 Features

### User Authentication
- User Registration
- User Login
- Secure Password Hashing using Bcrypt
- MongoDB User Storage

### News Platform
- News Dashboard
- News Cards Interface
- Responsive UI
- Category-Based News Browsing

### Backend APIs
- RESTful API Architecture
- Flask Backend
- MongoDB Atlas Integration
- User Management APIs

### Security
- Password Encryption
- Environment Variable Management
- Secure Database Connection

### Upcoming Features
- JWT Authentication
- User Session Management
- Real-Time News Fetching
- AI Recommendation Engine
- User Behavior Tracking
- Personalized News Feed
- News Analytics Dashboard

---

# 🏗️ System Architecture

```text
Frontend (React + Vite)
        │
        ▼
Backend (Flask API)
        │
        ▼
MongoDB Atlas Database
        │
        ▼
AI Recommendation Engine (Upcoming)
```

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

## Backend
- Python
- Flask
- Flask-CORS
- Bcrypt

## Database
- MongoDB Atlas
- PyMongo

## Version Control
- Git
- GitHub

---

# 📂 Project Structure

```text
news-recommendation-system
│
├── backend
│   ├── app.py
│   ├── .env
│   └── venv
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/Manisai47/news-recommendation-system.git
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install flask flask-cors pymongo python-dotenv bcrypt pyjwt

python app.py
```

Backend runs at:

```text
http://127.0.0.1:5000
```

---

## MongoDB Configuration

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
```

---

# 📸 Screenshots

### Home Page

(Add Screenshot Here)

### Signup Page

(Add Screenshot Here)

### Login Page

(Add Screenshot Here)

### MongoDB Database

(Add Screenshot Here)

---

# 🎯 Project Objectives

- Build a personalized recommendation engine
- Analyze user interaction behavior
- Improve user engagement and retention
- Deliver relevant news content
- Implement AI-based recommendation techniques

---

# 🔮 Future Enhancements

- JWT Authentication
- Recommendation Algorithms
- Machine Learning Integration
- User Preference Analysis
- News Sentiment Analysis
- Real-Time News APIs
- Admin Dashboard
- Bookmark Articles
- Like & Dislike System

---

# 👨‍💻 Author

**Mani Sai**

GitHub:
https://github.com/Manisai47

---

# ⭐ Support

If you found this project useful, consider giving it a star on GitHub.