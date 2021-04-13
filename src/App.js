import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { Login } from "./Login.js";
import { Landing } from "./Landing.js";
const socket = io();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Landing socket={socket} setIsLoggedIn={setIsLoggedIn} />;
  } else {
    return (
      <Login
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        socket={socket}
      />
    );
  }
}

export default App;
