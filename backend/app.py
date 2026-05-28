from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import bcrypt
import os

load_dotenv()

app = Flask(__name__)

CORS(app)

mongo_uri = os.getenv("MONGO_URI")

client = MongoClient(mongo_uri)

db = client["news_recommendation_db"]

users_collection = db["users"]

@app.route("/")
def home():
    return {
        "message": "News Recommendation Backend Running"
    }

# SIGNUP API
@app.route("/signup", methods=["POST"])
def signup():

    data = request.json

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    existing_user = users_collection.find_one({
        "email": email
    })

    if existing_user:
        return {
            "message": "User already exists"
        }, 400

    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    )

    user_data = {
        "name": name,
        "email": email,
        "password": hashed_password
    }

    users_collection.insert_one(user_data)

    return {
        "message": "User created successfully"
    }

# LOGIN API
@app.route("/login", methods=["POST"])
def login():

    data = request.json

    email = data.get("email")
    password = data.get("password")

    user = users_collection.find_one({
        "email": email
    })

    if not user:
        return {
            "message": "User not found"
        }, 404

    password_match = bcrypt.checkpw(
        password.encode("utf-8"),
        user["password"]
    )

    if not password_match:
        return {
            "message": "Invalid password"
        }, 401

    return {
        "message": "Login successful",
        "user": {
            "name": user["name"],
            "email": user["email"]
        }
    }

if __name__ == "__main__":
    app.run(debug=True)