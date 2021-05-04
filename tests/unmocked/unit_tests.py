import os
import sys

sys.path.append(os.path.abspath('../../'))
import unittest
import models
from datetime import date
import unittest
from app import add_dada


post1 = models.Social(googleId=1111 , post='test',username='gabin',url='www',date=date.today())
post2=  models.Social(googleId=2222 , post='test2',username='ntankeu',url='www',date=date.today())
data=[post1,post2]
lst=[]


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
            print(actual_result)
            expected_result = d
            print(expected_result)
            self.assertEqual(actual_result, expected_result)
            self.assertEqual(len(actual_result), len(expected_result))

   

if __name__ == '__main__':
    unittest.main()

