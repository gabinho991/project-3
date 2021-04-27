import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import { Login } from "./Login.js";
import { Landing } from "./Landing.js";
import { BrowserRouter as Router } from "react-router-dom";

const socket = io();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [info, changeInfo] = useState({});
  const [post, updatepost] = useState({});
  socket.on("personal_info", (data) => {
    changeInfo({ ...data[0] });
    updatepost({ ...data[1]});
  });
  //socket.on("social_tab", (data) => {
   // updatepost({ ...data});
  //});
  
  return (
    <Router>
    <div>
      {isLoggedIn === true ? (
        <Landing
          info={info}
           post={post}
          changeInfo={changeInfo}
          socket={socket}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <div className="wrap">
          <div className="login">
            <h1>Social Fitness</h1>
            <h5>Please login and start journey with us!</h5>
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              socket={socket}
              info={info}
              post={post}
              changeInfo={changeInfo}
            />
          </div>
        </div>
      )}
    </div>
    </Router>
  );
}

export default App;
