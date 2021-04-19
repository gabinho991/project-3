import { NavBar } from "./Navigation";

export function Landing(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  const socket=props.socket;
  const info=props.info;
  const changeInfo=props.changeInfo;
  return (
    <div className="wrapper">
      <NavBar socket={socket} info={info} changeInfo={changeInfo} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
