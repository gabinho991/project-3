import * as React from "react";
import { useState } from "react";
import { useRef } from 'react';

export function FoodSearch(props) {
    const [recipes, setRecipes] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const inputRef = useRef(null);
    const socket = props.socket;
    
    const APP_ID = "bd586d90";
    const APP_KEY = "b6e3ba52f5b9a13eb87d67e335cc4e1d";
    const Diet = 'low-fat';
    
    const onSubmit = () => {
        const ingredient = inputRef.current.value;
        console.log(ingredient);
        const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&Diet=${Diet}`;
        console.log(url);
        //socket.emit("ingredients",{'query':url});
        socket.emit("ingredients", {
          query: url,
          nutrition_query: ingredient
    });
    };
    
    socket.on("ingredients", (data) => {
      console.log(data)
      setRecipes(data.Recipe);
      setNutrition(data.Nutrition);
    });
    
  console.log(recipes);
  return (
      <div className="recipeBody">
      <h1>Recipe Search</h1>
        <div className="inputWrap">
          <input
            className="inputText"
            ref={inputRef}
            type="text"
            placeholder="Enter Ingridient"
            autoComplete="Off"
          />
          <input className="inputBtn" type="submit" value="Search" onClick={onSubmit}/>
        </div>
        <div className="recipeBg">
          <div className="recipeWrap">
            {recipes !== [] &&
            recipes.map((recipe) => {
              return (
                <div>
                  <a href={recipe.Link} target="_blank">
                    <div className="recipeBox">
                      <h3>{recipe.Label}</h3>
                      <img src={recipe.Image} alt="food"></img>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
           <div className="">
           <table>
            {nutrition !== [] &&
            nutrition.map((nutrition) => {
              return (
                <tr>
                <th>{nutrition.Name}</th>
                <th>{nutrition.Value}</th>
                <th>{nutrition.Unit}</th>
                </tr>
              );
            })}
          </table>
          </div>
        </div>
        
      </div>
      );
}
