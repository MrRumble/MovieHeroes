from app import app
from flask import Flask, request, jsonify, redirect
from dotenv import load_dotenv
import requests

@app.route("/", methods=["GET"])
def getpost():   # Will be refactored later to point to top 12 films from db.
    return "Post" 

