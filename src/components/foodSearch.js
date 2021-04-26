import * as React from "react";
import { useState } from "react";
import { useRef } from 'react';

export function FoodSearch(props) {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const inputRef = useRef(null);
    const socket = props.socket;
    
    const APP_ID = "bd586d90";
    const APP_KEY = "b6e3ba52f5b9a13eb87d67e335cc4e1d";
    const Diet = 'balanced';
    

    const onSubmit = () => {
        const ingredient = inputRef.current.value;
        console.log(ingredient);
        const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&Diet=${Diet}`;
        console.log(url);
        //socket.emit("ingredients",{'query':url});
        socket.emit("ingredients", {
          query: url
    });
    }
    
  
  
  
  return (
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
        />
        <input type="submit" value="Search" onClick={onSubmit}/>
      </div>
      );
}
