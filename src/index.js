import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating max="5" />
    <StarRating max={5} size={24} color="red" />
    <StarRating messages={["Terrible", "Bad", "Good", "Great", "Awesome"]} />
    <StarRating defaultRating={3} />
  </React.StrictMode>
);
