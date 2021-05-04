import * as React from "react";
export function Favorites(props) {
  const socket = props.socket;
  const mealFavorites = props.mealFavorites;
  const workoutFavorites = props.workoutFavorites;
  return (
    <div className="recipeBg">
      <div className="recipeWrap">
        {mealFavorites.length !== 0 ? (
          <div className="recipeHead">Click on the picture for recipes</div>
        ) : null}
        {mealFavorites.length !== 0 ? (
          Object.keys(mealFavorites).map((recipe) => {
            return (
              <div>
                <div className="recipeBox">
                  <h3>{mealFavorites[recipe].label}</h3>
                  <a href={mealFavorites[recipe].link} target="_blank">
                    <img src={mealFavorites[recipe].image} alt="food"></img>
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="emptyMsg">Favorites will be shown here</div>
        )}
      </div>
    </div>
  );
}
