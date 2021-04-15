import { GoogleLogout } from "react-google-login";

const clientId =
  "815983674480-urois11u2eirc0skojd2f8o6v8vjtr8m.apps.googleusercontent.com";

export function Logout(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  const onLogoutSuccess = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} id = 'NavButton'>Logout</button>
        )}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      ></GoogleLogout>
    </div>
  );
}
