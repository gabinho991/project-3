import { Logout } from "./Logout.js";
export function Landing(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="wrapper">
      <Logout setIsLoggedIn={setIsLoggedIn} />
      <h1> Welcome to project 3! (This title and style needs updating)</h1>
    </div>
  );
}
