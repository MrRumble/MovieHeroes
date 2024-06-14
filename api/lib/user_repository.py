from lib.user import User
import bcrypt
from lib.database_connection import get_db

class UserRepository():
    def __init__(self, connection):
        self.db = connection.get_db()
        self.user_details_errors = {'password': "", 'email': "" , "login" : ""}

    #Create a new user
    #user: an instance of User class object
    def create(self, user, table_name = 'users'):        
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(user.password.encode("utf-8"), salt)

        user_data = {
            'full_name': user.full_name,
            'email': user.email,
            'password': hashed_password.decode("utf-8") 
        }  
        result = self.db[table_name].insert_one(user_data)
        user.id = result.inserted_id
        user.password = hashed_password.decode("utf-8") 
        return user
    
    #Checks if the user already exists in our db
    def email_exists(self, email, table_name = 'users'):
        user = self.db[table_name].find_one({'email': email})
        if user:
            self.user_details_errors['email'] = "Email address already exists. Try another one!"
            return True
        return False
    
