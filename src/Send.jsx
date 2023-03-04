import React from "react";
import { Button } from "@mui/material";
import { Wrapper } from "./wrapper/Login";
import "./send.css";
const Send = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="btn__group">
            <Button variant="outlined">For name:</Button>
            <Button variant="outlined">Log Out</Button>
          </div>
          <Wrapper>
            <div>
              <h2>Product name</h2>
              <input type="text" />
            </div>
            <div>
              <h2>Product price</h2>
              <input type="text" />
            </div>

            <Button variant="outlined">Send</Button>
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Send;
