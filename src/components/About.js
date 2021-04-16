import * as React from 'react';


export function About() {
    
    return (
        <div className="about">
          <div className="title">
            <h1>About the App</h1>
          </div>
          <div className="about_body">
            <div className="description">
              <h1>Description</h1>
              <p>
                We aim to deliver a real-time fitness app accessible from the browser. This web app provides a secure Google login that 
                allows users to identify themselves, and users will be able to search for workouts, nutrition information of a paticular ingredient
                healthy meals and even log their current fitness progress.
              </p>
            </div>
            <div className="infoContainer">
              <h2>Profile Tab</h2>
              <p>
                The profile tab allows user to store their current age, weight, height and gender in their 
                profile and also make chages to it if necessary.
              </p>
            </div>
            <div className="infoContainer">
              <h2>Social Media Tab</h2>
              <p>
                The social media tab allows users to create text-based post and share it with others who joins it. Users can share their personal thoughts, workout 
                routines, personal favorite recipes and aslo will be able to comment on each other's post. 
              </p>
            </div>
            <div className="infoContainer">
              <h2>Food Search Tab</h2>
              <p>
                The food search tab allows users to search for a ingredient. Once a ingredient is searched it will show the nutrition values
                of that ingredient and also display healthy recipes related to the ingredient searched. This tab also allows user to favorite
                their recipe searched for future use.
              </p>
            </div>
            <div className="infoContainer">
              <h2>Workout Search Tab</h2>
              <p>
                The workout search tab allows users to search for a workout. Once a workout is searched it will show different exercise related
                to that workout and also has the to option to favorite that workout for future use.
              </p>
            </div>
        </div>
      </div>
    );
    
}