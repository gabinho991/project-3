import os
from flask import Flask, send_from_directory, json, session
from flask_socketio import SocketIO
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import exists
# from dotenv import find_dotenv, load_dotenv

# load_dotenv(find_dotenv())

app = Flask(__name__, static_folder="./build/static")

cors = CORS(app, resources={r"/*": {"origins": "*"}})

socketio = SocketIO(app, cors_allowed_origins="*",
                    json=json, manage_session=False)

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

DB = SQLAlchemy(app)

# User class is here because of import errors, need to look into this further
class User(DB.Model):
    # Unique ID from users google account
    googleId = DB.Column(DB.String(120), unique=True,
                         nullable=False, primary_key=True)
    email = DB.Column(DB.String(120), unique=True, nullable=False)
    imageUrl = DB.Column(DB.String(250), nullable=True)
    givenName = DB.Column(DB.String(120), nullable=False)  # First name
    familyName = DB.Column(DB.String(120), nullable=False)  # Last name
    # Automatically made to null values in db
    age = DB.Column(DB.String(4), nullable=True)
    gender = DB.Column(DB.String(15), nullable=True)
    weight = DB.Column(DB.String(4), nullable=True)
    height = DB.Column(DB.String(4), nullable=True)

    def __repr__(self):
        return '<User %r>' % self.googleId


socketio = SocketIO(app, cors_allowed_origins="*",
                    json=json, manage_session=False)

DB.create_all()


@app.route("/", defaults={"filename": "index.html"})
@app.route("/<path:filename>")
def index(filename):
    return send_from_directory("./build", filename)



''' Called when user connects '''
@socketio.on("connect")
def on_connect():
    print("User connected!")

''' Called when user successfully logs in, everything is converted to string because its easier to manage in the DB '''
@socketio.on("login")
def on_login(data):
    googleId = str(data["profileObj"]["googleId"])
    email = str(data["profileObj"]["email"])
    imageUrl = str(data["profileObj"]["imageUrl"])
    givenName = str(data["profileObj"]["givenName"])
    familyName = str(data["profileObj"]["familyName"])

    user = User(googleId=googleId, email=email, imageUrl=imageUrl,
                givenName=givenName, familyName=familyName)
    ret = DB.session.query(exists().where(User.googleId == googleId)).scalar()
    if(ret is False):
        DB.session.add(user)
        DB.session.commit()
        # Debugging print, for anyone needing only to query, this is how 
        # you do it, none of the other code needs to be altered, if you do need to alter it, please
        # be mindful of merge conflicts and try minimize them
    print(User.query.all()) 


socketio.run(
    app,
    host=os.getenv('IP', '0.0.0.0'),
    port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
)
