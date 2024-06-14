from app import app
from flask import request, jsonify
from lib.user_repository import *
from lib.user import User
import lib.database_connection as database_connection

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Please provide email, and password'}), 400

    user_repo = UserRepository(connection=database_connection)

    user_check = user_repo.user_exists(email,password)
    
    return user_check
    