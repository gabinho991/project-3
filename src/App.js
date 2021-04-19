import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import { Login } from "./Login.js";
import { Landing } from "./Landing.js";

const socket = io();

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [info, changeInfo] = useState({});
  socket.on('personal_info', (data) =>{
      // console.log(data);
      changeInfo({...data});
  });
  return (
    <div>
      {isLoggedIn === true ? 
        (<Landing info={info} changeInfo={changeInfo} socket={socket} setIsLoggedIn={setIsLoggedIn} />)
        :
        (
        <div className="wrap">
          <div className="login">
            <h1>Social Fitness</h1>
            <h5>Please login and start journey with us!</h5>
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              socket={socket}
              info={info}
              changeInfo={changeInfo}
            />
          </div>
        </div>
        )
      }
    </div>
  );
}

export default App;
