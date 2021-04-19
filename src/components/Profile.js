import * as React from 'react';
import  { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io(); // Connects to socket connection
export function Profile() {
    
    useEffect(() => {
    console.log("........................................")
    socket.emit('test', 'data');
    }, []);
    
    return (
        <h1>Personal Information Page</h1>    
    );
    
}