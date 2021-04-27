import * as React from "react";

export function WorkoutSearch() {
  return (
    <div>
        <h1>This feature is currently being worked on</h1>
        <div>
            <label for="muscle"> Choose a muscle: </label>
            <select name="muscle" id="muscle">
                <option hidden disabled selected value> -- select an option -- </option>
                <option value="Abs">Abs</option>
                <option value="Arms">Arms</option>
                <option value="Back">Back</option>
                <option value="Calves">Calves</option>
                <option value="Chest">Chest</option>
                <option value="Legs">Legs</option>
                <option value="Shoulders">Shoulders</option>
            </select>
        </div>
    </div>
    );
}
