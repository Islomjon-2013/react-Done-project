import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl, token } from "../assets/api/const";
import "../stayles/login.css";

const Login = () => {
  const [see, setsee] = useState();
  const personEmail = useRef();
  const personpassword = useRef();
  const navigate = useNavigate();
  const loginPerson = () => {
    axios
      .post(`${apiUrl}login`, {
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
      <div class="form-box">
        <div className="form-value">
          <div className="form">
            <h2>Login</h2>
            <div className="input-box">
              <input
                className="form-control w-100 my-2"
                ref={personEmail}
                type="email"
                placeholder="email"
              />
            </div>
            <div className="input-box">
              <input
                className="form-control w-100 my-2"
                ref={personpassword}
                type={see ? "password" : "text"}
                placeholder="password"
              />
            </div>

            <button onClick={loginPerson}>send</button>
            <div class="register">
              <p>
                if you havn’t Registed yet ?{" "}
                <Link to={"/rigester"}>rigester</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
