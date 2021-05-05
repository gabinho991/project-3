import os
import sys
from unittest import TestCase
from flask import Flask, session
sys.path.append(os.path.abspath('../../'))
import unittest
import unittest.mock as mock
from unittest.mock import patch
import models
from app import APP
from datetime import date
from app import newpost
#from app import getpost

user = models.Social(googleId=1111 , post='test',username='gabin',url='www',date=date.today())
lst={user.username:[user.post]}
lst2={user.username:[user.post]}




class UpdateUserTestCase(unittest.TestCase):
    def setUp(self):
        
         self.success_test_params = [{
             
            'input' : [2222 , 'test2','ntankeu','wwww',date.today()],
            
        }, {
            'input' : [3333 , 'test3','ntankeu','wwww',date.today()],
            
          
        }, {
           'input' : [4444 , 'test4','newark','wwww',date.today()],
            
        }]

    def mocked_add(self, post):
        if post.username not in lst2:
            lst2[post.username]=[post.post]
        else :
            lst2[post.username].append(post.post)
    def mocked_commit(self):
        pass
       
    
    def mocked_social(self):
        return lst2

    def test_add_post(self):
        for test in self.success_test_params:
            if test['input'][2] not in lst:
                lst[test['input'][2]]=[test['input'][1]]
            else : lst[test['input'][2]].append(test['input'][1])
            with patch('models.Social.query') as mocked_query:
                mocked_query.all = self.mocked_social
                with patch('app.DB.session.add', self.mocked_add):
                    with patch('app.DB.session.commit', self.mocked_commit):
                
                        actual_result = newpost(test['input'])
                       
                        print(actual_result)
                        print(lst)
                        expected_result = lst
                        

                        self.assertEqual(len(actual_result),len(expected_result))
                        self.assertEqual(actual_result, expected_result)

    
   

if __name__ == '__main__':
    unittest.main()
