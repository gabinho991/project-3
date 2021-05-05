import * as React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
import "../workoutSearch.css";
//force-push #2
export function WorkoutSearch(props) {
  // const socket = props.socket;
  const [workouts, setWorkouts] = useState([]);
  // const info = props.info;
  const workoutFavorites = props.workoutFavorites;
  var currentWorkoutFavorites = [];

  if (workoutFavorites.length !== 0) {
    Object.keys(workoutFavorites).map((workout) => {
      currentWorkoutFavorites.push(workoutFavorites[workout].name);
    });
  }

  const onFavorite = (workout) => {
    // socket.emit("favorite_workout" , {workout , info })
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
      <div id="dropDown" className="dropDown">
        <div className="workoutHeader">
          <h1>This feature is currently being worked on</h1>
          <div className="searchWrap">
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
          </div>
        </div>
        <div className="workoutBg">
          <div className="workoutWrap">
            {workouts.length !== 0
              ? workouts.map((workout) => {
                  return (
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="workoutBoxFront">
                          <h3> {workout.name} </h3>
                          <div className="imgContainer">
                            <img src="https://img.etimg.com/photo/msid-74747053,quality-100/for-miles-a-great-bodyweight-workout-would-include-squats-push-ups-walking-lunges-.jpg" alt="great bodyweight workout"/>
                          </div>
                        </div>
                        <div className="workoutBoxBack">
                          {currentWorkoutFavorites.includes(workout.name) ===
                          false ? (
                            <button
                              id="fav-btn"
                              onClick={(e) => onFavorite(workout)}
                            >
                              <img src="pre-fav.png" alt="pre-favorites"/>{" "}
                            </button>
                          ) : (
                            <button
                              id="fav-btn"
                              onClick={(e) => onRemoveFavorite(workout)}
                            >
                              <img src="pre-fav.png" alt="pre-favorites"/>{" "}
                            </button>
                          )}
                          <p> {workout.description} </p>
                        </div>
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