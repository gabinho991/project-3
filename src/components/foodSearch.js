import * as React from "react";
import { useState } from "react";
import { useRef } from 'react';

export function FoodSearch(props) {
    const [recipes, setRecipes] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const [ tableStatus, setTableStatus ] = useState(false);
    const inputRef = useRef(null);
    const socket = props.socket;
    
    const APP_ID = "bd586d90";
    const APP_KEY = "b6e3ba52f5b9a13eb87d67e335cc4e1d";
    const Diet = 'low-fat';
    
    const onSubmit = () => {
        const ingredient = inputRef.current.value;
        // console.log(ingredient);
        const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&Diet=${Diet}`;
        // console.log(url);
        //socket.emit("ingredients",{'query':url});
        socket.emit("ingredients", {
          query: url,
          nutrition_query: ingredient
    });
    };
    
    const onFavorite = recipe => {
      console.log("onFavorite test click");
      console.log(recipe);
    }
    
    const showTable = () => {
      tableStatus === true ? setTableStatus(false) : setTableStatus(true);
    };
    
    socket.on("ingredients", (data) => {
      // console.log(data)
      setRecipes(data.Recipe);
      setNutrition(data.Nutrition);
    });
    
  // console.log(recipes);
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
          
          {recipes.length !== 0 ?
            [tableStatus === true ? 
            <input className="showBtn" type="submit" value="Hide Nutrition List" onClick={showTable}/> :
            <input className="showBtn" type="submit" value="Show Nutrition List" onClick={showTable}/> ]
            : null
          }
        </div>
        <div className="recipeBg">
          <div className="recipeWrap">
            {recipes.length !== 0 ? <div className="recipeHead">Click on the picture for recipes</div> : null }
            {recipes.length !== 0 ?
            recipes.map((recipe) => {
              return (
                <div>
                <div className="recipeBox">
                <button id="fav-btn" onClick={e => onFavorite(recipe)}><img src="pre-fav.png" /> </button>
                <h3>{recipe.Label}</h3>
                  <a href={recipe.Link} target="_blank">
                    <img src={recipe.Image} alt="food"></img>
                  </a>
                  </div>
                </div>
              );
            }): 
                <div className="emptyMsg">
                  Recipes will be shown here
                </div>
            }
          </div>
            {tableStatus === true ?
             <div className="nutritionWrap">
                 <table>
                 <tr>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Unit</th>
                 </tr>
                  {nutrition !== [] &&
                  nutrition.slice(1).map((nutrition) => {
                    return (
                      <tr>
                        <td>{nutrition.Name}</td>
                        <td>{nutrition.Value}</td>
                        <td>{nutrition.Unit}</td>
                      </tr>
                    );
                  })}
                </table>
            </div> :
            null}
        </div>
        
      </div>
      );
}
