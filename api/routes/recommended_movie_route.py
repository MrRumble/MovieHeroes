from app import app
from utils.create_matrix import create_matrix
from utils.user_recommendations import recommend_movies_for_user
from lib.database_connection import get_db
from lib.rating_repository import RatingRepository
from lib.movie_repository import MovieRepository
from flask import jsonify

# Initialize repositories and mappings globally or within the route handler

db = get_db()
rating_repo = RatingRepository(db)
movie_repo = MovieRepository(db)
all_ratings = rating_repo.all_ratings()

X, user_mapper, movie_mapper, user_inv_mapper, movie_inv_mapper = create_matrix(all_ratings)

@app.route("/recommendations/<int:user_id>", methods=["GET"])
def recommended_movies(user_id):
    recommended_movie_ids = recommend_movies_for_user(user_id, X, user_mapper, movie_mapper, user_inv_mapper, movie_inv_mapper)
    
    movies_dicts = []
    for movie_id in recommended_movie_ids:
        try:
            found_movie = movie_repo.find_movie_by_id(movie_id).__dict__
            movies_dicts.append(found_movie)
        except:
            pass
    
    #Sort the movies_dicts in descending order of highest vote_average value.
    sorted_movies = sorted(movies_dicts, key=lambda x: x.get('vote_average', 0), reverse=True)

    return jsonify(sorted_movies)
