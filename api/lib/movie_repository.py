import movie
import database_connection  

class MovieRepository:
    def __init__(self):
        self.db = database_connection.get_db()

    def find_movie_by_id(self, id):
        movies = self.db["Movie_Heros"]
        found_movie = movies.find_one({"id": id})
        return movie.Movie(
            found_movie["id"],
            found_movie["title"],
            found_movie["overview"],
            found_movie["poster_path"],
            found_movie["backdrop_path"],
            found_movie["vote_average"],
            found_movie["release_date"]
            )

movies = MovieRepository()
print(movies.find_movie_by_id(238))
