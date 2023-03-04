import React from "react";
import { Button } from "@mui/material";
import "./final.css";
const Final = () => {
  return (
    <div className="final">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="btn__group">
              <Button variant="outlined">For name:</Button>
              <Button variant="outlined">Log Out</Button>
            </div>

            <div className="card__box">
              <h2> Product id: 12</h2>
              <h2>Product name: orange</h2>
              <h2>Product price: $12</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
