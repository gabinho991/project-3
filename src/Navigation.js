import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { SocialMedia } from "./components/SocialMedia";
import { FoodSearch } from "./components/foodSearch";
import { WorkoutSearch } from "./components/workoutSearch";
import { Logout } from "./Logout.js";

export function NavBar(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  const socket=props.socket;
  const info = props.info;
  const changeInfo=props.changeInfo;
  return (
    <div className="navBarWrapper">
        <div className="Header">
            <h1> Social Fitness </h1>
        </div>
            <Router>
            <div className="NavBar">
                <div className="NavBtnWrap">
                    <Link id = 'NavButton' to="/about">
                        About
                    </Link>
                </div>
                <div className="NavBtnWrap">
                    <Link id = 'NavButton' to="/profile">
                        Profile
                    </Link>
                </div>
                <div className="NavBtnWrap">
                    <Link id = 'NavButton' to="/socialMedia">
                        Social Media
                    </Link>
                </div>
                <div className="NavBtnWrap">
                    <Link id = 'NavButton' to="/food">
                        Food search
                    </Link>
                </div>
                <div className="NavBtnWrap">
                    <Link id = 'NavButton' to="/workout">
                        Workout search
                    </Link>
                </div>
                <div className="NavBtnWrap">
                    <Logout setIsLoggedIn={setIsLoggedIn} />
                </div>
            </div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/profile">
                        <Profile info={info} changeInfo={changeInfo} />
                    </Route>
                    <Route path="/socialMedia">
                        <SocialMedia />
                    </Route>
                    <Route path="/food">
                        <FoodSearch />
                    </Route>
                    <Route path="/workout">
                        <WorkoutSearch />
                    </Route>
                </Switch>
            </Router>
        
    </div>
  );
}
