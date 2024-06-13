import os
from flask import Flask
from flask_pymongo import PyMongo
from dotenv import load_dotenv
from flask_cors import CORS



load_dotenv()
# Create a new Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('JWT_SECRET')
app.config['MONGO_URI'] = os.getenv('MONGODB_URL')

# # Access environment variables
# flask_env = os.getenv('FLASK_ENV')
# mongodb_url = os.getenv('MONGODB_URL')
# jwt_secret = os.getenv('JWT_SECRET')

CORS(app)

mongodb_client = PyMongo(app)
db = mongodb_client.db


from routes.landing_page import *
from routes.signup import *

from routes.tmdb_trending_page import *

from routes.movie_page import *

# These lines start the server if you run this file directly
# They also start the server configured to use the test database
# if started in test mode.
if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
