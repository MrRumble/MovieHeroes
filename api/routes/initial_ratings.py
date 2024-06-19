from app import app
from flask import request, jsonify
from lib.database_connection import get_db
from lib.movie_repository import MovieRepository
from lib.rating_repository import RatingRepository
from lib.user_repository import UserRepository
from lib.link_repository import LinkRepository


@app.route("/init_ratings", methods = ['GET'])
def init_rating():
    connection = get_db()
    movie_repo = MovieRepository(connection)
    movies = movie_repo.initial_rating_films()

    return jsonify(movies)

@app.route('/init_ratings', methods=['POST'])
def post_rating():
    db = get_db()
    data = request.json
    movie_id = data.get('movieId')  # Assuming the frontend sends 'movieId'
    user_id = data.get('userId')
    rating = data.get('rating')
    link = db['links']
    link_repo = LinkRepository(db)
    ratings = db['ratings']
    movie_id = link_repo.to_movieId(movie_id, link)
    user = UserRepository(db)
    user_id = user.get_user_id_from_object_id(user_id)
    rating_repo = RatingRepository(db)
    print(movie_id)

    if ratings.find_one({"$and":[{"userId": user_id}, {"movieId": movie_id}]}) is not None:
        filter = {"$and":[{"userId": user_id}, {"movieId": movie_id}]}
        new_rating = {"$set": {"rating": rating}}
        rating_repo.update_rating(filter, new_rating)
    else:
        print("We are in except")
        rating_repo.add_rating(user_id, movie_id, rating)
    return jsonify(rating)
