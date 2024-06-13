from lib.movie import Movie
from lib import database_connection
from pymongo import DESCENDING
from flask import jsonify

class MovieRepository:
    def __init__(self):
        self.db = database_connection.get_db()

    def find_movie_by_id(self, id, movie_table = "Movie_Heros") :
        movies = self.db[movie_table]
        found_movie = movies.find_one({"id": id})
        return Movie(
            found_movie["id"],
            found_movie["title"],
            found_movie["overview"],
            found_movie["poster_path"],
            found_movie["backdrop_path"],
            found_movie["vote_average"],
            found_movie["release_date"]
            )
    
    def find_top_movies(self, num_of_movies, movie_table = "Movie_Heros"):
        movies = self.db[movie_table]
        sorted_db_vote_average = movies.find().sort("vote_average", DESCENDING).limit(num_of_movies) #limit can be catered to our needs
        movies_as_dicts = list(sorted_db_vote_average)
        for movie in movies_as_dicts:
            movie['_id'] = str(movie['_id'])
        return movies_as_dicts


    
movies = MovieRepository()
print(movies.find_movie_by_id(238, "test_movie_database"))

