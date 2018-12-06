import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";
import "./styles.css";

function App() {
  return (
    <div>
      <Layout />
      <div className="container" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
