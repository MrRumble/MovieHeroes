import os
from flask import Flask
from flask_pymongo import PyMongo
from dotenv import load_dotenv
from flask_cors import CORS
from lib.database_connection import get_db
from lib.movie_repository import MovieRepository
from lib.movie import Movie
from lib.rating import Rating
from lib.rating_repository import RatingRepository
from utils.create_matrix import create_matrix
from utils.movie_recommendations import find_similar_movies 
import pandas as pd

load_dotenv()
# Create a new Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('JWT_SECRET')
app.config['MONGO_URI'] = os.getenv('MONGODB_URL')

CORS(app)

from routes.recommended_movie_route import *
from routes.userProfile import *
from routes.signup import *
from routes.login import *
from routes.landing_page import *
from routes.tmdb_trending_page import *

from routes.movie_page import *

# These lines start the server if you run this file directly
# They also start the server configured to use the test database
# if started in test mode.
if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
