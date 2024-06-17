from app import app
from lib.token import *
from flask import request, jsonify
from lib.tokenChecker import token_checker

@app.route("/userProfile", methods=["POST"])
@token_checker
def update_Avatar(): 
    user_id = request.args.get('userId')
    try:
        token = generate_token(user_id)
        #we need a line here to push the avatar to user so it is stored in the array
        return jsonify({"post": "Token Checker almost works", "token": token}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500