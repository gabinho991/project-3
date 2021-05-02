import * as React from "react";
import {useEffect} from "react";


export function WorkoutSearch(props) {
    
    const socket = props.socket;
    
    //use this function to set the information through socket to be added to favorite table
    function clickButton()
    {
        // alert("favorite was clicked");
        console.log("favorite was clicked");
    }
    
    useEffect(() => {
        document.getElementById("muscleSearch").addEventListener("click", () => {
            console.log("button was clicked");
            const muscleValue = document.getElementById("muscle").value;
            console.log(muscleValue);
            const url = "https://wger.de/api/v2/exercise.json?language=2&limit=300&category=" + muscleValue;
            window.fetch(url).then(response => response.json())
                .then(data => {
                    console.log(data.results);
                    const contain = document.getElementsByClassName("container");
                    console.log(contain);
                    
                    contain[0].innerHTML = "";
                    data.results.forEach(
                        function(workout){
                            const item = document.createElement("div");
                            const head = document.createElement("div");
                            const title = document.createElement("b");
                            const body = document.createElement("div");
                            const images = document.createElement("div");
                            // var fav = document.createElement("button");
                            const lineBreak = document.createElement("br");
                            // workout.images.forEach(
                            //     function(img){
                            //         console.log(img.image);
                            //         const currentImage = document.createElement("img");
                            //         currentImage.src = img.image;
                            //         currentImage.alt = "image of " + workout.name;
                            //         images.appendChild(currentImage);
                            //     }
                            // );
                            title.innerHTML = workout.name;
                            body.innerHTML = workout.description;
                            // fav.innerHTML = "Favorite";
                            // fav.onClick = e => clickButton();
                            
                            
                            head.appendChild(title);
                            item.appendChild(head);
                            item.appendChild(body);
                            item.appendChild(images);
                            // item.appendChild(fav);
                            item.style.background = "yellow";
                            contain[0].appendChild(item);
                            contain[0].appendChild(lineBreak);
                        }
                    );
                });
        });
    }, []);
    
    return (
        <div>
            <h1>This feature is currently being worked on</h1>
            <div id="dropDown" className="dropDown" style={{background:"red"}}>
                <label for="muscle"> Choose a muscle: </label>
                <select name="muscle" id="muscle">
                    <option hidden disabled selected value> -- select an option -- </option>
                    <option value="10">Abs</option>
                    <option value="8">Arms</option>
                    <option value="12">Back</option>
                    <option value="14">Calves</option>
                    <option value="11">Chest</option>
                    <option value="9">Legs</option>
                    <option value="13">Shoulders</option>
                </select>
                <button id="muscleSearch">Search</button>
                <div className="container"></div>
                
                
            </div>
        </div>
    );
}
