import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
//force push
export function WorkoutSearch(props) {
  const socket = props.socket;
  const [workouts, setWorkouts] = useState([]);
  const workoutFavorites = props.workoutFavorites;
  var currentWorkoutFavorites = [];

  if (workoutFavorites.length !== 0) {
    Object.keys(workoutFavorites).map((workout) => {
      currentWorkoutFavorites.push(workoutFavorites[workout].name);
    });
  }

  const onFavorite = (workout) => {
    console.log(workout);
  };
  const onRemoveFavorite = (workout) => {
    console.log("remove");
  };
  const onSubmit = () => {
    const muscleValue = document.getElementById("muscle").value;
    const url =
      "https://wger.de/api/v2/exercise.json?language=2&limit=300&category=" +
      muscleValue;
    window
      .fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          var e = element.description;
          try {
            e = $(e).text();
            element.description = e;
          } catch (exception) {
          } finally {
            element.description = element.description;
          }
        });
        setWorkouts(data.results);
      });
  };
  return (
    <div>
      <h1>This feature is currently being worked on</h1>
      <div id="dropDown" className="dropDown">
        <label for="muscle"> Choose a muscle: </label>
        <select name="muscle" id="muscle">
          <option hidden disabled selected value>
            {" "}
            -- select an option --{" "}
          </option>
          <option value="10">Abs</option>
          <option value="8">Arms</option>
          <option value="12">Back</option>
          <option value="14">Calves</option>
          <option value="11">Chest</option>
          <option value="9">Legs</option>
          <option value="13">Shoulders</option>
        </select>
        <button id="muscleSearch" onClick={(e) => onSubmit()}>
          Search
        </button>
        <div className="recipeBg">
          <div className="recipeWrap">
            {workouts.length !== 0
              ? workouts.map((workout) => {
                  return (
                    <div>
                      <div className="recipeBox">
                        {currentWorkoutFavorites.includes(workout.name) ===
                        false ? (
                          <button
                            id="fav-btn"
                            onClick={(e) => onFavorite(workout)}
                          >
                            <img src="pre-fav.png" />{" "}
                          </button>
                        ) : (
                          <button
                            id="fav-btn"
                            onClick={(e) => onRemoveFavorite(workout)}
                          >
                            <img src="pre-fav.png" />{" "}
                          </button>
                        )}
                        <h3> {workout.name} </h3>
                        <p> {workout.description} </p>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}