import requests
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())
key = os.getenv('WORKOUT_KEY')
# print(key)
BASE_URL = "https://wger.de/api/v2/exerciseinfo.json?language=2"

# params = {
#     'format': "json",
#     "language": 2
# }

response = requests.get(BASE_URL) #, params=params)
# print(response)
# print(type(response))
# print("helooooooooooooo\n")
data = response.json()
print(data)

# def get_workout_data():
#     """Returns the workout data from the api and we manually
#     pick the ones for our topic"""
    
#     response = requests.get(BASE_URL)
#     data = response.json()
    
#     print(data)