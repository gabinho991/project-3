import * as React from 'react';
import  { useState, useRef } from 'react';
import '../social.css';




export function SocialMedia(props) {
    const [post, updatepost] = useState([]);
    const message = useRef(null);
    const [isShown, setshow] = useState(true);
   //const socket= props.socket;
  // const User = props.userinfos;

    function post_function()
    {
        const nmessage = message.current.value;
        const new_post=[...post];
        new_post.push(nmessage);
       updatepost(new_post);
        //socket.emit('post',[nmessage,User[3]]);
       
       //setshow((prevShow) => !prevShow);
    }
    function post_button()
    {
         setshow((prevShow) => !prevShow);
    }
   
    return (
        <div>
        <h1>Social Media Page</h1>
        
   
        <div className="post">
         <button class="button"
              type="button"
              onClick={() => {
                post_button();
              }}
            >
              {' '}
            Click here to add a post
            </button>
            
            
     {!isShown ? (   
   <div>
     <textarea ref={message} placeholder="Type message.." rows="6" cols="50" />
            <button class="button2"
              type="button"
             
              onClick={() => {
                post_function();
              }}
            >
              {' '}
              Post
              
            </button>
            
        </div>
        
         ) : null}
         <div class="userpost">
            {post.map((item) => (
            <div>
               <pa> {item} </pa>
              
              </div>
            ))}
        </div>
        </div>
        </div>
    );
    
}