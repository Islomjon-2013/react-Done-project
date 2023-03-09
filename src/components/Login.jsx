import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl, token } from "../assets/api/const";
import "../stayles/login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const notify = () => toast("Wow so easy!");
  // const [see, setsee] = useState(false);
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
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          location.reload();
        } else {
          toast("You did mistakes!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (token) navigate("/");
  }, []);

  return (
    <>
      <ToastContainer />
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
                  required
                />
              </div>
              <div className="input-box">
                <input
                  className="form-control w-100 my-2"
                  ref={personpassword}
                  type="password"
                  placeholder="password"
                  required
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
    </>
  );
};

export default Login;
// {see ? "password" : "text"}
