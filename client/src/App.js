import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Login from "./components/login";

const clientId =
  "366374972420-u9qn7d8j7r67dbr0ge9jag56u7s6dnvg.apps.googleusercontent.com";
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
