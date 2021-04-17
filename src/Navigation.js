import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { SocialMedia } from "./components/SocialMedia";
import { FoodSearch } from "./components/foodSearch";
import { WorkoutSearch } from "./components/workoutSearch";
import { Home } from "./components/home";
import { Logout } from "./Logout.js";

export function NavBar(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="navBarWrapper">
            <Router>
            <div className="NavBar">
                <div className="Header">
                    <h1> Social Fitness </h1>
                </div>
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
                    <Link to="/">
                    <Logout setIsLoggedIn={setIsLoggedIn} />
                    </Link>
                </div>
            </div>
            
                <Switch>
                    <div className="mainBody">
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/profile">
                            <Profile />
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
                    </div>
                </Switch>
            </Router>
        
    </div>
  );
}
