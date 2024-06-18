from app import app
from flask import Flask, request, jsonify, redirect
from dotenv import load_dotenv
from lib.movie_repository import MovieRepository
from flask_cors import CORS
from lib.database_connection import get_db

# @app.route("/searchMovies", methods=["GET"])
# def search_for_movies():
#     try:
#         db = get_db()
#         movie_repo = MovieRepository(db)
#         all_movies = movie_repo.find_all_movies()

#         # Ensure the response is JSON serializable
#         return jsonify(all_movies)
#     except Exception as e:
#         # Log the error and return an error response
#         print(f"Error occurred: {e}")
#         return jsonify({"error": "An error occurred while fetching movies"}), 500
    

@app.route("/searchMovies", methods=["POST"])
def search_for_movies():
    try:
        data = request.get_json()
        value = data.get('value',"")
        db = get_db()
        movie_repo = MovieRepository(db)
        # Fetch all movie documents
        movies = movie_repo.find_all_movies(value)
        print(movies)

        all_movies=[]
        # Convert ObjectId to string for JSON serialization
        for movie in movies:
            movie['_id'] = str(movie['_id'])
            all_movies.append({
                "movie_id": movie['_id'],
                "movie.title": movie['title']
            })
        return jsonify(all_movies)
    except Exception as e:
        # Log the error and return an error response
        print(f"Error occurred: {e}")
        return jsonify({"error": "An error occurred while fetching movies"}), 500
    