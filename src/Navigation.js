import { Switch, Route, Link } from "react-router-dom";

import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { SocialMedia } from "./components/SocialMedia";
import { FoodSearch } from "./components/foodSearch";
import { WorkoutSearch } from "./components/workoutSearch";
import { Home } from "./components/home";
import { Logout } from "./Logout.js";
import { Favorites } from "./components/favorites";

export function NavBar(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  const socket = props.socket;
  const info = props.info;
  const post = props.post;
  const changeInfo = props.changeInfo;
  const mealFavorites=props.mealFavorites;
  return (
    <div className="navBarWrapper">
      <div className="NavBar">
        <div className="Header">
          <h1> Social Fitness </h1>
        </div>
        <div className="NavBtnWrap">
          <Link id="NavButton" to="/home">
            Home
          </Link>
        </div>
        <div className="NavBtnWrap">
          <Link id="NavButton" to="/about">
            About
          </Link>
        </div>
        <div className="NavBtnWrap">
          <Link id="NavButton" to="/profile">
            Profile
          </Link>
        </div>
        <div className="NavBtnWrap">
          <Link id="NavButton" to="/socialMedia">
            Social Media
          </Link>
        </div>
        <div className="NavBtnWrap">
          <Link id="NavButton" to="/food">
            Food search
          </Link>
        </div>
        <div className="NavBtnWrap">
          <Link id="NavButton" to="/workout">
            Workout search
          </Link>
        </div>
        <div className="NavBtnWrap">
          <Link id="NavButton" to="/favorites">
            Favorites
          </Link>
        </div>
        <div className="NavBtnWrap">
          <div id="NavButton">
            <Logout setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
      </div>

        <Switch>
          <div className="mainBody">
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile socket={socket} info={info} changeInfo={changeInfo} />
            </Route>
            <Route path="/socialMedia">
              <SocialMedia socket={socket} info={info}  post={post}/>
            </Route>
            <Route path="/food">
              <FoodSearch info={info} socket={socket}/>
            </Route>
            <Route path="/workout">
              <WorkoutSearch />
            </Route>
            <Route path="/favorites">
              <Favorites info={info} mealFavorites={mealFavorites} socket={socket} />
            </Route>
          </div>
        </Switch>
      
    </div>
  );
}
