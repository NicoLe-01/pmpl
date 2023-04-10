import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/NavBar";
import ImageClassifier from "./components/ImageClassifier";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <ImageClassifier />
  </React.StrictMode>
);
