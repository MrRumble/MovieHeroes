from lib.movie import Movie
from lib.database_connection import get_db

class MovieRepository:
    def __init__(self, db):
        self.db = db 

    def find_movie_by_id(self, id):
        movies = self.db["Movie_Heros"]
        found_movie = movies.find_one({"id": int(id)})
        return Movie(
            found_movie["id"],
            found_movie["title"],
            found_movie["overview"],
            found_movie["poster_path"],
            found_movie["backdrop_path"],
            found_movie["vote_average"],
            found_movie["release_date"]
            )
