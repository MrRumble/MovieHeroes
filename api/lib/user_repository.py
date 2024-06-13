from lib.user import User
import bcrypt
from lib.database_connection import get_db

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
    
    def email_exists(self, email):
        user = self.db.users.find_one({'email': email})
        print("!!!!!!!!!!!",user)
        if user:
            self.user_details_errors['email'] = "Email address already exists. Try another one!"
            return True
        return False

# # Initialize the validator with your MongoDB connection URI and database name
# validator = UserValidator(mongo_uri="your_mongo_uri", db_name="your_db_name")

#     #Find user information by using a user id
#     #id: user id within the database table
#     def find_by_id(self, id):
#         list_of_user_records = self._connection.execute('SELECT * from users WHERE id = %s', [id])
#         record = list_of_user_records[0]
#         return User(record["id"], record["username"], record["email_address"], record["password"])
    
#     def find_by_email(self, email_address):
#         list_of_user_records = self._connection.execute('SELECT * from users WHERE email_address = %s', [email_address])
#         record = list_of_user_records[0]
#         return User(record["id"], record["username"], record["email_address"], record["password"])
        
#     def user_signup_password_validator(self, password):
#         #Check that password is valid
#         pwd_errors=[]
#         special_char =['$', '@', '#', '%', '!']
        
#         if len(password) < 8:
#             pwd_errors.append('8 characters')
            
#         if not any(char.isdigit() for char in password):
#             pwd_errors.append('one numeral')
            
#         if not any(char.isupper() for char in password):
#             pwd_errors.append('one uppercase letter')
            
#         if not any(char.islower() for char in password):
#             pwd_errors.append('one lowercase letter')
            
#         if not any(char in special_char for char in password):
#             pwd_errors.append('one of the symbols $@#%!')
        
#         self.user_details_errors['password'] = 'Password should have at least: ' + ', '.join(pwd_errors) if pwd_errors else ""
        
#         if pwd_errors:
#             return True
#         else:
#             return False
    
#     def email_exists(self, email_address):
#         rows = self._connection.execute('''SELECT * FROM users WHERE email_address = %s''', [email_address])

#         # Check if email is unique
#         if rows:
#             self.user_details_errors['email_address'] = "Email address already exists. Try another one!"
#             return True

# # self.user_details_errors['email_address'] = ""!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
#         return False
    
#     def validate_login(self, email_address, password_attempt):
#         # Hash the password attempt
#         binary_password_attempt = password_attempt.encode("utf-8")
#         hashed_password_attempt = hashlib.sha256(binary_password_attempt).hexdigest()

#         # Check whether there is a user in the database with the given email
#         # and a matching password hash, using a SELECT statement.
#         rows = self._connection.execute(
#             'SELECT * FROM users WHERE email_address = %s AND password = %s',
#             [email_address, hashed_password_attempt])
        
#         if len(rows) == 0:
#             self.user_details_errors['login'] = "Email address or password is wrong! Please try again!"
#             return False

#         # If that SELECT finds any rows, the password is correct.
#         return True
    
