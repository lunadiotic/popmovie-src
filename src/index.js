import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating max={5} />
    <StarRating max={10} />
    <StarRating />
  </React.StrictMode>
);
