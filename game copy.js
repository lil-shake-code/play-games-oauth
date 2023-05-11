function init() {
  gapi.load("auth2", function () {
    console.log("Google Games services API loaded");
    alert("Google Games services API loaded");

    // Initialize the GoogleAuth object and sign in the user on button click
    gapi.auth2
      .init({
        client_id:
          "932160326621-0vsbjrvvkgpqc1nq9d2gfnbbgpkluudn.apps.googleusercontent.com",
      })
      .then(function (auth2) {
        console.log("GoogleAuth object created");

        var loginBtn = document.getElementById("login-btn");
        loginBtn.addEventListener("click", function () {
          auth2.signIn().then(function () {
            console.log("User signed in");
          });
        });

        var getPlayerBtn = document.getElementById("get-player-btn");
        getPlayerBtn.addEventListener("click", function () {
          // Get the access token and make the API request
          var user = auth2.currentUser.get();
          var accessToken = user.getAuthResponse().access_token;

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
        });
      });
  });
}
