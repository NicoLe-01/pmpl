import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./NavBar";
// import Classifier from "./Classifier";
import ImageClassifier from "./ImageClassifier";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <ImageClassifier />
  </React.StrictMode>
);
