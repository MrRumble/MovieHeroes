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
import pandas as pd
import time 



from app import app


@app.route("/movie_page/<id>", methods=["GET"])
def getMovie(id):
    id = int(id)
    db = get_db()
    movies_repo = MovieRepository(db)
    found_movie = movies_repo.find_movie_by_id(id, "Movie_Heros").__dict__
    ratings = RatingRepository(db).all_ratings()

    X, user_mapper, movie_mapper, user_inv_mapper, movie_inv_mapper = create_matrix(ratings)

    movie_id = id


    similar_ids = find_similar_movies(movie_id, db, movie_mapper, movie_inv_mapper, X, k=10)

    found_movie["similar"] = []

    for id in similar_ids:
        similar_movie = movies_repo.find_movie_by_id(id, "Movie_Heros").__dict__ 
        found_movie["similar"].append(similar_movie)

    return jsonify(found_movie)

@app.route("/movie_page/<id>", methods = ["POST"])
def add_rating():
    db=get_db()
    rating_repo = RatingRepository(db)

    userId = request.json['userId']
    movieId = request.json["movieId"]
    ratings = request.json['Ratings']

    rating_repo.add_rating(userId, movieId, ratings)

    return 'Thanks for the rating'