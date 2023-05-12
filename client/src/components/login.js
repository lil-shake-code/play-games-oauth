import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
const clientId =
  "932160326621-vjcl3nd50k6ucgj8p5tflcjfomiqhg9e.apps.googleusercontent.com";
const clientSecret = "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";
function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    var accessToken = gapi.auth.getToken().access_token;
    //get player info from google play games
    // make a get request with the access token
    axios
      .get("https://www.googleapis.com/games/v1/players/me", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // gapi.client
    //   .request({
    //     path: "https://www.googleapis.com/games/v1/players/me",
    //     method: "GET",
    //     headers: {
    //       Authorization: "Bearer " + accessToken,
    //     },
    //   })
    //   .then(
    //     function (response) {
    //       console.log(response.result);
    //     },
    //     function (reason) {
    //       console.error("Error: " + reason.result.error.message);
    //     }
    //   );
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
