import { useState, React, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();


export function Profile() {
    
    const [info, changeInfo] = useState({});
    
    useEffect(() => {
        socket.on('personal_info', (data) =>{
            console.log(data);
            changeInfo({...data});
        });
    }, []);
    
    return (
        <div>
            <h1>Personal Information Page</h1>
            <img src={info.imageUrl} alt="Current users profile pic" />
            <h1>Given Name: {info.givenName}</h1>
            <h1>Family Name: {info.familyName}</h1>
            <h1>Age: {info.age}</h1>
            <h1>Gender: {info.gender}</h1>
            <h1>Weight: {info.weight}</h1>
            <h1>Height: {info.height}</h1>
        
        </div>
    );
    
}