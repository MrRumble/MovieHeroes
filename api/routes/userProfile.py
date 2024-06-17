from app import app
from lib.token import *
from flask import g, request, jsonify
from lib.tokenChecker import token_checker
from lib.user_repository import *
import lib.database_connection as database_connection

@app.route("/userProfile", methods=["GET", "POST"])
@token_checker
def update_Avatar(): 
    user_id = g.user_id
    new_avatar_url = request.json.get('avatar')
    
    token = generate_token(user_id)
    user_repo = UserRepository(connection=database_connection)

    user_repo.update_avatar_by_id(user_id, new_avatar_url)
    updated_user = user_repo.find_user_by_id(user_id)

    # Convert ObjectId to string for JSON serialization
    updated_user['_id'] = str(updated_user['_id'])

    return jsonify({"update_user": updated_user, "token":token}), 200
    