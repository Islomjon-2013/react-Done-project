import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiUrl, headerToken } from "../api/Const";
import { Button } from "@mui/material";
import "../stayles/see.css";
const See = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});

  useEffect(() => {
    axios
      .get(`${apiUrl}products/${id}`, headerToken)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="price">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="btn__group">
              <Button variant="outlined">
                {" "}
                <Link className="link" to={"/login"}>
                  Log out
                </Link>
              </Button>
              <Button variant="outlined">
                <Link className="link" to={"/"}>
                  home
                </Link>
              </Button>
            </div>
            <div className="card__box">
              <h2>
                Product id: <span>{data?.id}</span>{" "}
              </h2>
              <h2>
                Product name: <span>{data?.name}</span>
              </h2>
              <h2>
                Product price:<span>{data?.price}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default See;
