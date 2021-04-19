import { useState, React, useEffect } from 'react';
import io from 'socket.io-client';
// import '../profile.css';

export function Profile(props) {
    const info = props.info;
    const changeInfo=props.changeInfo;
    const socket=props.socket;
    console.log(info);
    function edit()
    {
        return(
            <div className="edit">
            <h1>Hello World</h1>
            </div>
            );
    }
    
    // socket.on('personal_info', (data) =>{
    //     console.log(data);
    //     changeInfo({...data});
    // });

    return (
        <div className="overarching">
            <h1>Personal Information Page</h1>
            <div className="profile_head">
                <img src={info.imageUrl} alt="Current users profile pic" />
                <h1>{info.givenName} {info.familyName}</h1>
            </div>
            <div className="profile_body">
                <div className="boxes">
                    <h1>Age: {info.age}</h1>
                </div>
                <div className="boxes">
                    <h1>Gender: {info.gender}</h1>
                </div>
                <div className="boxes">
                    <h1>Weight: {info.weight}</h1>
                </div>
                <div className="boxes">
                    <h1>Height: {info.height}</h1>
                </div>
                <br />
                <button className="button" onClick={() => edit()} type="button">Edit Profile</button>
            </div>
        </div>
    );
    
}