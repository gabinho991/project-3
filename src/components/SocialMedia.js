import * as React from 'react';
import  { useState, useRef } from 'react';
import '../App.css';
import io from 'socket.io-client';



export function SocialMedia() {
    const [post, updatepost] = useState([]);
    const message = useRef(null);
    const [isShown, setshow] = useState(true);
    const socket = io();
    function post_function()
    {
        
        const new_post=[...post];
        new_post.push(message);
        updatepost(new_post);
        socket.emit('post',{post:new_post});
    }
    function post_button()
    {
         setshow((prevShow) => !prevShow);
    }
    return (
        <div>
        <h1>Social Media Page</h1> 
        <div className="post">
         <button
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
     <textarea ref={message} placeholder="Type message.." />
            <button
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
        </div>
        </div>
    );
    
}