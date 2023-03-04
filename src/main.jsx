import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Sign from "./Sign";
import Send from "./Send";
import Table from "./Table";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Final from "./Final";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <createGlobalStyle />
    <Sign />
    <Send />
    <Table />
    <Final />
  </>
);
