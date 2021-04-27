'''
our flask based app
'''
# pylint: disable=E1101, C0413, W1508, R0903, W0603

import os
from datetime import date
from flask import Flask, send_from_directory, json
from flask_socketio import SocketIO
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import exists
from sqlalchemy import desc
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# https://stackoverflow.com/questions/66690321/flask-and-heroku-sqlalchemy-exc-nosuchmoduleerror-cant-load-plugin-sqlalchemy
# SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL').replace(
#     "://", "ql://", 1)
APP = Flask(__name__, static_folder="./build/static")

CORS = CORS(APP, resources={r"/*": {"origins": "*"}})

SOCKETIO = SocketIO(APP,
                    cors_allowed_origins="*",
                    json=json,
                    manage_session=False)

APP.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL')
# app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
APP.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

DB = SQLAlchemy(APP)
import models

DB.create_all()  # likely not needed anymore


@APP.route("/", defaults={"filename": "index.html"})
@APP.route("/<path:filename>")
def index(filename):
    '''Load up index.html to start'''
    return send_from_directory("./build", filename)


@SOCKETIO.on("connect")
def on_connect():
    """Called when user connects"""
    print("User connected!")
    d={}
    all_data = models.Social.query.order_by(desc('date')).all()

    for elm in all_data:
        if elm.googleId not in d:
            d[elm.googleId]=[elm.username,elm.url,elm.post]
        else:
           d[elm.googleId].append(elm.post)
    SOCKETIO.emit('social_tab',
                  d,
                  broadcast=True,
                  include_self=True)


@SOCKETIO.on("login")
def on_login(data):
    ''' Called when user successfully logs in, everything is
    converted to string because its easier to manage in the DB '''
    google_id = str(data["profileObj"]["googleId"])
    email = str(data["profileObj"]["email"])
    image_url = str(data["profileObj"]["imageUrl"])
    given_name = str(data["profileObj"]["givenName"])
    family_name = str(data["profileObj"]["familyName"])

    user = models.User(googleId=google_id,
                       email=email,
                       imageUrl=image_url,
                       givenName=given_name,
                       familyName=family_name,
                       age="0",
                       height="0",
                       gender="none",
                       weight="none")
    ret = DB.session.query(
        exists().where(models.User.googleId == google_id)).scalar()
    if ret is False:
        DB.session.add(user)
        DB.session.commit()
        # Debugging print, for anyone needing only to query, this is how
        # you do it, none of the other code needs to be altered, if you do need to alter it, please
        # be mindful of merge conflicts and try minimize them
    print(DB.session.query(models.User).filter_by(googleId=google_id).all())
    current_user_info = DB.session.query(
        models.User).filter_by(googleId=google_id).first()
    personal_data = {
        "googleID": current_user_info.googleId,
        "imageUrl": current_user_info.imageUrl,
        "givenName": current_user_info.givenName,
        "familyName": current_user_info.familyName,
        "age": current_user_info.age,
        "gender": current_user_info.gender,
        "weight": current_user_info.weight,
        "height": current_user_info.height
    }
    SOCKETIO.emit('personal_info',
                  personal_data,
                  broadcast=True,
                  include_self=True)



@SOCKETIO.on("onSubmit")
def update_db(data):
    '''called when the user submits changes'''
    print(data)
    # print(data.googleID)
    # socketio.emit('personal_info', data, broadcast=True, include_self=True)
    modified_user = DB.session.query(
        models.User).filter_by(googleId=data["googleID"]).first()
    modified_user.age = data["editAge"]
    modified_user.gender = data["editGender"]
    modified_user.weight = data["editWeight"]
    modified_user.height = data["editHeight"]
    DB.session.commit()

    current_user_info = DB.session.query(
        models.User).filter_by(googleId=data["googleID"]).first()
    personal_data = {
        "googleID": current_user_info.googleId,
        "imageUrl": current_user_info.imageUrl,
        "givenName": current_user_info.givenName,
        "familyName": current_user_info.familyName,
        "age": current_user_info.age,
        "gender": current_user_info.gender,
        "weight": current_user_info.weight,
        "height": current_user_info.height
    }
    print("Updated Information: ", personal_data)
    SOCKETIO.emit('personal_info',
                  personal_data,
                  broadcast=True,
                  include_self=True)


@SOCKETIO.on("post")
def newpost(data):
    '''save user's post in the DB'''
   
    social=models.Social(googleId=data[0] , post=data[1],username=data[2],url=data[3],date=date.today())
   
    DB.session.add(social)
    DB.session.commit()
    # new_post = data[0]
    # new_date = date.today()
    # new_post = models.Social(googleId=identity, post=new_post, date=new_date)
    # DB.session.add(new_post)
    # DB.session.commit()
    print(models.Social.query.all())


if __name__ == "__main__":
    SOCKETIO.run(
        APP,
        debug=True,
        host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
    )
