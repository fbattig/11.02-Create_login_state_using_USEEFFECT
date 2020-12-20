import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const url = "https://images.unsplash.com/photo-1562051036-e0eea191d42f";
  const [displayImage, setDisplayImage] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleHandle = () => {
    setDisplayImage(!displayImage);
  };

  const loginHandle = () => {
    setLoggedIn(!loggedIn);
  };

  useEffect(() => {
    const loggedInFromLocalStorage = localStorage.getItem("loggedIn");
    if (JSON.parse(loggedInFromLocalStorage) === true) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  return (
    <div className="App">
      {displayImage && <img src={url} alt="Some cofee beans" />}
      <br />
      <button onClick={toggleHandle}>Toggle Image Display</button>
      <br />
      <button onClick={loginHandle}>{loggedIn ? "log Out" : "log In"}</button>
    </div>
  );
};
export default App;
