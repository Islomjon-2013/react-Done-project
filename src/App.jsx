import React from "react";

import "./App.css";
const App = () => {
  return (
    <div className="section">
      <div class="form-box">
        <div class="form-value">
          <form action="">
            <h2>Login</h2>
            <div class="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" />
              <label for="">Email</label>
            </div>
            <div class="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label for="">Password</label>
            </div>

            <button>Log in</button>
            <div class="register">
              <p>
                if you havn’t Registed yet ? <a href="#">Register Now </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;