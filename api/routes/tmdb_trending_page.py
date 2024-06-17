from app import app
from flask import Flask, request, jsonify, redirect
from dotenv import load_dotenv
import requests
import os

load_dotenv()
api_key = os.getenv('TMDB_API_KEY')
base_url = 'https://api.themoviedb.org/3/movie/popular'



@app.route("/tmdb-trending", methods=["GET"])
def get_tmdb_trending():
    params = {
        'api_key': api_key,
        'language': 'en-US',
        'sort_by': 'popularity.desc',
        'page': 1
    }
    all_movies = []
    total_movies = 12 
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        data = response.json()
        movies = data.get('results', [])[:total_movies]
        for movie in movies:
            movie_info = {
                'title': movie.get('title'),
                'poster_url': f"https://image.tmdb.org/t/p/w500{movie.get('poster_path')}",
                'backdrop_url': f"https://image.tmdb.org/t/p/w1280{movie.get('backdrop_path')}"
            }
            all_movies.append(movie_info)
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
        # print(all_movies)
    return jsonify(all_movies)
