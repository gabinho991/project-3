import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
<<<<<<< HEAD
import $ from 'jquery';

=======
import $ from "jquery";
//force push
>>>>>>> 133b8132c2e640bb02db36227b6ca28a8d63f114
export function WorkoutSearch(props) {
  const socket = props.socket;
  const [workouts, setWorkouts] = useState([]);

  const onSubmit = () => {
    const muscleValue = document.getElementById("muscle").value;
    const url =
      "https://wger.de/api/v2/exercise.json?language=2&limit=300&category=" +
      muscleValue;
    window
      .fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //   var x = data.results.description;
          var y = $(data.results[1].description).text(); //tags are cleaned, just need to update to reflect local stored state
          console.log(y);
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
                        <h3> {workout.name} </h3>
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
