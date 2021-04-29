import { NavBar } from "./Navigation";

export function Landing(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  const socket = props.socket;
  const info = props.info;
  const post = props.post;
  const mealFavorites=props.mealFavorites;
  
  const changeInfo = props.changeInfo;
  return (
    <div className="wrapper">
      <NavBar
        socket={socket}
        info={info}
        post={post}
        changeInfo={changeInfo}
        setIsLoggedIn={setIsLoggedIn}
        mealFavorites={mealFavorites}
      />
    </div>
  );
}
