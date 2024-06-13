from app import app
from flask import request, jsonify
from lib.user_repository import *
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
    print ("this is the email", email)

    print("this is the date!!!!", data)

    if not full_name or not email or not password:
        return jsonify({'error': 'Please provide full name, email, and password'}), 400

    user_repo = UserRepository(connection=database_connection)

    print("this is the user repo", user_repo)

    email_check = user_repo.email_exists(email)

    print("this is the email check and email", email_check, email)

    if email_check == True:
        email_error = user_repo.user_details_errors['email']
        print("this is the email_error", email_error)
        return jsonify({'email_exist': email_error}),500
    else:
        user = User(full_name, email, password)
        print(user)
        new_user = user_repo.create(user)
        
    return jsonify({
            'id': str(new_user.id),
            'full_name': new_user.full_name,
            'email': new_user.email,
        }), 201