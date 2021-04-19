import { useState, React, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();


export function Profile() {
    
            socket.on('personal_info', (data) =>{
            console.log(data);
        });
    return (
        <h1>Personal Information Page</h1>    
    );
    
}