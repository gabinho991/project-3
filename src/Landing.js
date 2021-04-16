import { NavBar } from "./Navigation";

export function Landing(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="wrapper">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
