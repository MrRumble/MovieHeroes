from lib.movie import Movie
from lib import database_connection
from pymongo import DESCENDING

class MovieRepository:
    def __init__(self):
        self.db = database_connection.get_db()

    def find_movie_by_id(self, id):
        movies = self.db["Movie_Heros"]
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
    
    def find_top_twelve_movies(self):
        movies = self.db["Movie_Heros"]
        sorted_db_vote_average = movies.find().sort("vote_average", DESCENDING).limit(12)
        movies_as_dicts = list(sorted_db_vote_average)
        print(type(sorted_db_vote_average))
        print(type(movies_as_dicts[0]))
        movies_objects = []
        for movie in movies_as_dicts:
            movie_to_add = Movie(
                movie["id"],
                movie["title"],
                movie["overview"],
                movie["poster_path"],
                movie["backdrop_path"],
                movie["vote_average"],
                movie["release_date"]
            )
            movies_objects.append(movie_to_add)
        return movies_objects


    
movies = MovieRepository()
print(movies.find_movie_by_id(238))
print(movies.find_top_twelve_movies())
