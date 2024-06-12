from app import app

@app.route("/signup", methods=["GET", "POST"])
def getpostSignup():
    return "Welcome to Movie Hero"