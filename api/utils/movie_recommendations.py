"""
Find similar movies using KNN
"""
import pandas as pd
from utils.create_matrix import create_matrix
from sklearn.neighbors import NearestNeighbors
from lib.movie_repository import MovieRepository
from lib.movie import Movie 
from lib.database_connection import get_db
from lib.link_repository import LinkRepository
import time


def find_similar_movies(movie_id, db, movie_mapper, movie_inv_mapper, X, k, metric='cosine', show_distance=False):
	neighbour_ids = []

	link_repo = LinkRepository(db)
	connection = db["links"]

	movie_id = link_repo.to_movieId(movie_id, connection)
	movie_ind = movie_mapper[movie_id]
	movie_vec = X[movie_ind]
	k+=1
	kNN = NearestNeighbors(n_neighbors=k, algorithm="brute", metric=metric)
	kNN.fit(X)
	movie_vec = movie_vec.reshape(1,-1)
	neighbour = kNN.kneighbors(movie_vec, return_distance=show_distance)
	for i in range(0,k):
		n = neighbour.item(i)
		try:
			neighbour_ids.append(link_repo.to_tmdb_id(movie_inv_mapper[n], connection))
		except:
			pass
	neighbour_ids.pop(0)
	neighbour_ids = [i for i in neighbour_ids if i is not None]
	return neighbour_ids




