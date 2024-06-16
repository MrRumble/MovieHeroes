from lib.movie_repository import MovieRepository
from lib.movie import Movie
import datetime
from lib.database_connection import get_db

"""
integration test that finds the movie from the test database using an id parameter
"""

def test_find_movies_with_id():
    db = get_db()
    movie_repo =MovieRepository(db)
    result = movie_repo.find_movie_by_id(238 , "test_movie_database")
    expected_result = Movie(238, "Title2", "Overview2", "/path2", "/random1", 8.694, datetime.datetime(1972, 3, 14, 0, 0) )

    assert result == expected_result