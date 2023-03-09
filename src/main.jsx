import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Roots from "./Roots";

import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Roots />
    </BrowserRouter>
  </>
);
