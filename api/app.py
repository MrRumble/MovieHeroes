import os
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
# from bson import ObjectID
import json


# Create a new Flask app
app = Flask(__name__)
# connect you mongodb after installation
app.config['MONGO_URI'] = "mongodb+srv://jetheesan:k6SvJayBqigNXLZS@cluster0.ilhubw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongo = PyMongo(app)

CORS(app)

db = mongo.db.test

# @app.route("/", methods=["GET", "POST"])
# def getpost():
#     return "Welcome to Movie Hero"


# These lines start the server if you run this file directly
# They also start the server configured to use the test database
# if started in test mode.
if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
