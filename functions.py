import requests

def recipe(url):
    r = requests.get(url)
    item = r.json()["hits"]
    recipe_list = []
    for i in item:
        recipe_list.append({"Label":i['recipe']['label'],"Link":i['recipe']['url'], "Image":i['recipe']['image']})
    return recipe_list
    
def nutrients_list(foodName):
    data = {"query" : foodName}
    url = f'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=8hyWjccDSzBnekm4sVRYH38M4chMQgjYT4S5TAh5'
    r = requests.post(url, json=data)
    description = r.json()["foods"][0]["lowercaseDescription"]
    item = r.json()["foods"][0]["foodNutrients"]
    nutrients = [{"description": description}]
    for i in item:
        nutrients.append({"Name": i['nutrientName'],  "Value":str(i['value']), "Unit": i['unitName']})
    return nutrients