from lib.user import User
import bcrypt
from lib.database_connection import get_db
from flask import jsonify

class UserRepository():
    def __init__(self, connection):
        self.db = connection.get_db()
        self.user_details_errors = {'password': "", 'email': "" , "login" : ""}

    #Create a new user
    #user: an instance of User class object
    def create(self, user):        
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(user.password.encode("utf-8"), salt)

        user_data = {
            'full_name': user.full_name,
            'email': user.email,
            'password': hashed_password.decode("utf-8") 
        }  
        result = self.db.users.insert_one(user_data)
        user.id = result.inserted_id
        user.password = hashed_password.decode("utf-8") 
        return user
    
    #Checks if the user already exists in our db
    def email_exists(self, email):
        user = self.db.users.find_one({'email': email})
        if user:
            self.user_details_errors['email'] = "Email address already exists. Try another one!"
            return True
        return False
    
#Check if the password already exists in our DB
    def user_exists(self,email, password):
        user = self.db.users.find_one({'email': email})
        
        if not user:
            print("Auth Error: User not found")
            return jsonify({"message": "User not found"}), 401
        elif not bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            print("Auth Error: Passwords do not match")
            return jsonify({"message": "Password incorrect"}), 401
        else :
            token = "selva"
            return jsonify({"token": token, "message": "OK", "userId": str(user['_id'])}), 201




# generate_token(user['_id'])