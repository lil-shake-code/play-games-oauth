function init() {
  gapi.load("auth2", function () {
    /* Ready. Make a call to gapi.auth2.init or some other API */
    alert("Google Games services API loaded");
  });
}
