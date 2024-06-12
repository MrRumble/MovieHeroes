from app import app

@app.route("/", methods=["GET", "POST"])
def getpost():
    return "Welcome to Movie Hero"