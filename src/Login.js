import { GoogleLogin } from "react-google-login";

const clientId =
  "815983674480-urois11u2eirc0skojd2f8o6v8vjtr8m.apps.googleusercontent.com";

export function Login(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
