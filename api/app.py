import os
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
import requests
api_key = 'b4c30110758111ab613a879d718da290'
base_url = 'https://api.themoviedb.org/3/movie/top_rated'
# from bson import ObjectID
import json


# Create a new Flask app
app = Flask(__name__)
# connect you mongodb after installation
app.config['MONGO_URI'] = "mongodb://localhost:27017/test"

mongo = PyMongo(app)

CORS(app)

db = mongo.db.test

@app.route("/", methods=["GET"])
def getpost():
    params = {
        'api_key': api_key,
        'language': 'en-US',
        'sort_by': 'popularity.desc',
        'page': 1
    }
    all_movies = []
    total_movies = 12  # Adjust based on your needs
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        data = response.json()
        movies = data.get('results', [])[:total_movies]
        for movie in movies:
            movie_info = {
                'title': movie.get('title'),
                'poster_url': f"https://image.tmdb.org/t/p/w500{movie.get('poster_path')}"
            }
            all_movies.append(movie_info)
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
    return jsonify(all_movies)



# These lines start the server if you run this file directly
# They also start the server configured to use the test database
# if started in test mode.
if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
