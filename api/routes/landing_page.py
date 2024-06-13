from app import app
from flask import Flask, request, jsonify, redirect
from dotenv import load_dotenv
from lib.movie_repository import MovieRepository
from flask_cors import CORS

@app.route("/landing-page", methods=["GET"])
def get_top_movies(): 
    movie_repo = MovieRepository()
    top_movies = movie_repo.find_top_movies()
    return top_movies

