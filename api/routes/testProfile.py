from app import app
from lib.token import *
from flask import request, jsonify
from lib.tokenChecker import token_checker

@app.route("/myprofile", methods=["GET"])
@token_checker
def get_user(): 
    user_id = request.args.get('userId')
    try:
        token = generate_token(user_id)
        return jsonify({"post": "Token Checker almost works", "token": token}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

# Example user model as a dictionary
user = {
    'name': 'Alice',
    'email': 'alice@example.com',
    'favorites': ['Python', 'Flask']
}

# Adding a new favorite item (equivalent to push in JavaScript for arrays)
user['favorites'].append('Django')

print(user)