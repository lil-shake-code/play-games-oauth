import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
const clientId =
  "366374972420-u9qn7d8j7r67dbr0ge9jag56u7s6dnvg.apps.googleusercontent.com";
const clientSecret = "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";

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    var accessToken = gapi.auth.getToken().access_token;
    //get player info from google play games
    // make a get request with the access token
    gapi.client
      .request({
        path: "https://www.googleapis.com/games/v1/players/me",
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then(
        function (response) {
          console.log(response.result);
        },
        function (reason) {
          console.error("Error: " + reason.result.error.message);
        }
      );
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
}

export default Login;
