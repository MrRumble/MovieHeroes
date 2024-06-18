
from app import app
from utils.create_matrix import create_matrix
from utils.user_recommendations import recommend_movies_for_user
from lib.database_connection import get_db
from lib.rating_repository import RatingRepository
from lib.movie_repository import MovieRepository
from lib.movie import Movie
from flask import jsonify

@app.route("/recommendations/<int:user_id>", methods=["GET"])
def recommended_movies(user_id):
    db = get_db()
    movie_repo = MovieRepository(db)

    rating_repo = RatingRepository(db)
    all_ratings = rating_repo.all_ratings()

    X, user_mapper, movie_mapper, user_inv_mapper, movie_inv_mapper = create_matrix(all_ratings)


    recommended_movie_ids = recommend_movies_for_user(user_id, X, user_mapper, movie_mapper, user_inv_mapper, movie_inv_mapper)
    print(recommended_movie_ids, "NEW RECOMMENDED IDS HERE!")
    movies_dicts = []   
    
    for movie_id in recommended_movie_ids:
        try:
            found_movie = movie_repo.find_movie_by_id(movie_id).__dict__
            movies_dicts.append(found_movie)
        except:
            pass
    
    return jsonify(movies_dicts)

    
