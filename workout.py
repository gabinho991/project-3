import requests
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())
key = os.getenv('WORKOUT_KEY')
print(key)

