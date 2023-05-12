import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Login from "./components/login";

const clientId =
  "932160326621-vjcl3nd50k6ucgj8p5tflcjfomiqhg9e.apps.googleusercontent.com";
const clientSecret = "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";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        clientSecret: clientSecret,
        //play games scope
        scope: "https://www.googleapis.com/auth/games",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
