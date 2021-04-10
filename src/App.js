import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { Landing } from "./Landing.js";

const socket = io();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <div></div>;
  }

  return <Landing setIsLoggedIn={setIsLoggedIn} socket={socket} />;
}

export default App;
