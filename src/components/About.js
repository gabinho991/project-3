import * as React from 'react';


export function About() {
    
    return (
        <div className="about">
            <h1>About the App</h1>
            <h2>Description</h2>
            <ul>
              <li>We aim to deliver a real-time fitness app accessible from the browser. This web app provides a secure Google login that 
              allows users to identify themselves, and users will be able to search for workouts, nutrition information of a paticular ingredient
              healthy meals and even log their current fitness progress.</li>
            </ul>
            <h2>Social Media Tab</h2>
            <ul>
              <li>The social media tab allows users to create text-based post and share it wil=th others who joins it. Users can share their
              personal thoughts, workout routines, personal favorite recipes and aslo will be able to comment on each other's post.</li>
            </ul>
            <h2>Food Search Tab</h2>
            <ul>
              <li>The food search tab allows users to search for a ingredient. Once a ingredient is searched it will show the nutrition values
              of that ingredient and also display healthy recipes related to the ingredient searched. This tab also allows user to favorite
              their recipe searched for future use.</li>
            </ul>
            <h2>Workut Search Tab</h2>
            <ul>
              <li>The workout search tab allows users to search for a workout. Once a workout is searched it will show different exercise related
              to that workout and also has the to option to favorite that workout for future use.</li>
            </ul>
        </div>
    );
    
}