import requests
import random
def quote():
    url="https://type.fit/api/quotes"
    x=requests.get(url)
    x=x.json()
    #num=random.randint(0,len(x.json())-1)
    #item = x.json()[num]['text']
    #item2 = x.json()[num]['author']
    
    return(x)
    #return ['" '+item+' "'+' : ',item2]
   
