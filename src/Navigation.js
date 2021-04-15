import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { About } from "./components/About";
import { FoodSearch } from "./components/foodSearch";
import { WorkoutSearch } from "./components/workoutSearch";
import { Logout } from "./Logout.js";

export function NavBar(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="wrapper">
        <h1> Social Fitness </h1>
            <Router>
            <div className="NavBar">
                <div className="about">
                    <Link id = 'NavButton' to="/about">
                        About
                    </Link>
                </div>
                <div className="foodSearch">
                    <Link id = 'NavButton' to="/food">
                        Food search
                    </Link>
                </div>
                <div className="workoutSearch">
                    <Link id = 'NavButton' to="/workout">
                        Workout search
                    </Link>
                </div>
                <div className="Logout">
                    <Logout setIsLoggedIn={setIsLoggedIn} />
                </div>
            </div>
                <Switch>
                    <Route path="/about">
                        <About />
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
