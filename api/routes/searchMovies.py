from app import app
from flask import Flask, request, jsonify, redirect
from dotenv import load_dotenv
from lib.movie_repository import MovieRepository
from flask_cors import CORS
from lib.database_connection import get_db   

@app.route("/searchMovies", methods=["GET", "POST"])
def search_for_movies():
    try:
        data = request.get_json()
        value = data.get('value')

        db = get_db()
        movie_repo = MovieRepository(db)

        # Fetch all movie documents that include user's input in the title
        movies = movie_repo.find_all_movies(value)
        # print(movies)


        # Convert ObjectId to string for JSON serialization
        for movie in movies:
            movie['_id'] = str(movie['_id'])
        
        # print(jsonify(movies))
        return jsonify(movies)
    
    except Exception as e:
        # Log the error and return an error response
        print(f"Error occurred: {e}")
        return jsonify({"error": "An error occurred while fetching movies"}), 500
    