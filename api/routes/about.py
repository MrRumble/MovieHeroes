from app import app

@app.route("/About", methods=["GET"])
def getpostSignup():
    return "about"