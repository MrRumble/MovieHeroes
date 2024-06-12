from app import app
from flask import Flask, request, jsonify, redirect
from dotenv import load_dotenv
import requests
api_key = 'b4c30110758111ab613a879d718da290'
base_url = 'https://api.themoviedb.org/3/movie/top_rated'

load_dotenv()

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

