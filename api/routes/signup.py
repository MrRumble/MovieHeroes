from app import app
from flask import request, jsonify
from lib.user_repository import UserRepository
from lib.user import User
import lib.database_connection as database_connection

@app.route("/signup", methods=["GET"])
def getpostSignup():
    return "Welcome to Movie Hero"

@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    full_name = data.get('full_name')
    email = data.get('email')
    password = data.get('password')

    if not full_name or not email or not password:
        return jsonify({'error': 'Please provide full name, email, and password'}), 400

    user = User(full_name, email, password)
    print(user)
    user_repo = UserRepository(connection=database_connection)
    new_user = user_repo.create(user)

    return jsonify({
        'id': str(new_user.id),
        'full_name': new_user.full_name,
        'email': new_user.email,
    }), 201