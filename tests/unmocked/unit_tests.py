import os
import sys

sys.path.append(os.path.abspath('../../'))
import unittest
import models
from datetime import date
import unittest
from app import add_dada
from app import personaldata


post1 = models.Social(googleId=1111 , post='test',username='gabin',url='www',date=date.today())
post2=  models.Social(googleId=2222 , post='test2',username='ntankeu',url='www',date=date.today())
post3 = models.Social(googleId=3333 , post='test3',username='gabin',url='www',date=date.today())
data=[post1,post2,post3]
lst=[]
lst2=[]
USER=models.User(googleId = 111,email ='@gmail1', givenName ='gabin', familyName ='ntankeu',imageUrl ='www', age =11, gender ='male', weight =98, height = 70)
USER1=models.User(googleId = 222,email ='@gmail2', givenName ='gabin1', familyName ='ntankeu2',imageUrl ='www', age =11, gender ='male', weight =98, height = 70)
USER2=models.User(googleId = 333,email ='@gmail3', givenName ='gabin2', familyName ='ntankeu2',imageUrl ='www', age =11, gender ='male', weight =98, height = 70)
data2=[USER,USER1,USER2]
class UpdateUserTestCase(unittest.TestCase):
    #def setup(self):
        
    def test_getpost(self):
        global data
        d={}
        for elm in data:
            lst.append(elm)
            if elm.username not in d:
                d[elm.username]=[elm.post]
            else:
                d[elm.username].append(elm.post)
            actual_result = add_dada(lst)
           
            expected_result = d
            
            self.assertEqual(actual_result, expected_result)
            self.assertEqual(len(actual_result), len(expected_result))
    def test_getuser(self):
        global data2
        
        for data in data2:
            d = {
        "googleID": data.googleId,
        "imageUrl": data.imageUrl,
        "givenName": data.givenName,
        "familyName": data.familyName,
        "age": data.age,
        "gender": data.gender,
        "weight": data.weight,
        "height": data.height
                }
            
            
            actual_result = personaldata(data)
            #print(actual_result)
            expected_result = d
            #print(expected_result)
            self.assertEqual(actual_result, expected_result)
            self.assertEqual(len(actual_result), len(expected_result))

   

if __name__ == '__main__':
    unittest.main()

