
from lib.database_connection import get_db
from lib.movie_repository import MovieRepository
from lib.movie import Movie
from utils.create_matrix import create_matrix
from utils.movie_recommendations import find_similar_movies
from flask import Flask, request, jsonify, redirect
from lib.rating import Rating
from lib.rating_repository import RatingRepository
from utils.create_matrix import create_matrix
from utils.movie_recommendations import find_similar_movies
from lib.user_repository import *
import pandas as pd
import time
from memory_profiler import profile



from app import app

@app.route("/test", methods=["GET"])
def test():
    db = get_db()
    start = time.time()
    ratings = db["movies"].find()
    end = time.time()
    print(end - start)
    
    all_ratings = []
    for rating in ratings:
        all_ratings.append(rating["movieId"])
        print(rating["movieId"])
    
    return jsonify(all_ratings)
