import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl, token } from "../api/Const";

const Rigester = () => {
  const [see, setsee] = useState(false);
  const personName = useRef();
  const personEmail = useRef();
  const personpassword = useRef();
  const navigate = useNavigate();
  const rigesterPerson = () => {
    axios
      .post(`${apiUrl}register`, {
        name: personName.current.value,
        email: personEmail.current.value,
        password: personpassword.current.value,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (token) navigate("/");
  }, []);
  return (
    <div className="section">
      <div className="form-value">
        <div class="form-box">
          <div className="form">
            <h2>Regester</h2>
            <div className="input-box">
              {" "}
              <input
                className="form-control w-100 my-2"
                ref={personName}
                type="text"
                placeholder="name"
              />
            </div>
            <div className="input-box">
              {" "}
              <input
                className="form-control w-100 my-2"
                ref={personEmail}
                type="email"
                placeholder="email"
              />
            </div>
            <div className="input_box">
              {" "}
              <input
                className="form-control w-100 my-2"
                ref={personpassword}
                type={see ? "password" : "text"}
                placeholder="password"
              />
            </div>

            <button onClick={rigesterPerson}>send</button>

            <div class="register">
              <p>
                if you havn’t Registed yet ? <Link to={"/login"}>login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rigester;
