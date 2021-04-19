import os
from flask import Flask, send_from_directory, json, session
from flask_socketio import SocketIO
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import exists
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

# https://stackoverflow.com/questions/66690321/flask-and-heroku-sqlalchemy-exc-nosuchmoduleerror-cant-load-plugin-sqlalchemy
# SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL').replace("://", "ql://", 1)

app = Flask(__name__, static_folder="./build/static")

cors = CORS(app, resources={r"/*": {"origins": "*"}})

socketio = SocketIO(app, cors_allowed_origins="*",
                    json=json, manage_session=False)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
# app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

DB = SQLAlchemy(app)

# User class is here because of import errors, need to look into this further
import models


socketio = SocketIO(app, cors_allowed_origins="*",
                    json=json, manage_session=False)

DB.create_all()

'''Load up index.html to start'''
@app.route("/", defaults={"filename": "index.html"})
@app.route("/<path:filename>")
def index(filename):
    return send_from_directory("./build", filename)



''' Called when user connects '''
@socketio.on("connect")
def on_connect():
    print("User connected!")

''' Called when user successfully logs in, everything is
converted to string because its easier to manage in the DB '''
@socketio.on("login")
def on_login(data):
    thisGoogleId = str(data["profileObj"]["googleId"])
    thisEmail = str(data["profileObj"]["email"])
    thisImageUrl = str(data["profileObj"]["imageUrl"])
    thisGivenName = str(data["profileObj"]["givenName"])
    thisFamilyName = str(data["profileObj"]["familyName"])

    user = models.User(googleId=thisGoogleId, email=thisEmail, imageUrl=thisImageUrl,
    givenName=thisGivenName, familyName=thisFamilyName)
    ret = DB.session.query(exists().where(models.User.googleId == thisGoogleId)).scalar()
    if(ret is False):
        DB.session.add(user)
        DB.session.commit()
        # Debugging print, for anyone needing only to query, this is how 
        # you do it, none of the other code needs to be altered, if you do need to alter it, please
        # be mindful of merge conflicts and try minimize them
    # print(DB.session.query(models.User).filter_by(googleId=thisGoogleId).all())
    currentUserInfo = DB.session.query(models.User).filter_by(googleId=thisGoogleId).first()
    personal_data = {
        "googleID": currentUserInfo.googleId,
        "imageUrl": currentUserInfo.imageUrl,
        "givenName": currentUserInfo.givenName,
        "familyName": currentUserInfo.familyName,
        "age": currentUserInfo.age,
        "gender": currentUserInfo.gender,
        "weight": currentUserInfo.weight,
        "height": currentUserInfo.height
    }
    print(personal_data)
    socketio.emit('personal_info', personal_data, broadcast=True, include_self=False)
    # print(models.User.query.all())
    #socketio.emit('user_info', [givenName, familyName, imageUrl],broadcast=True,include_self=False)


if __name__ == "__main__":
    socketio.run(
        app,
        debug=True,
        host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
    )
