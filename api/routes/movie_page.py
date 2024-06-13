from lib.database_connection import get_db
from lib.movie_repository import MovieRepository
from lib.movie import Movie
from utils.create_matrix import create_matrix
from utils.movie_recommendations import find_similar_movies
from flask import Flask, request, jsonify, redirect


from app import app


@app.route("/movie_page/<id>", methods=["GET"])
def getMovie(id):
    db = get_db()
    movies = MovieRepository(db)
    found_movie = movies.find_movie_by_id(id).__dict__

    return jsonify(found_movie)