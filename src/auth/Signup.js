import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
import "./Signup.css";
function Signup() {
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: registerInput.username,
      email: registerInput.email,
      password: registerInput.password,
    };
    console.log(data);
    fetch(`${API}/users/signup`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        alert("Registration Success");
        navigate("/login");
      }
    });
  };

  return (
    <>
      <div className="auth">
        <div className="auth-container">
          <div className="sign-up body"></div>
          <h1>User's Registration</h1>
          <form onSubmit={registerSubmit}>
            <div className="input-field">
              <p>Username</p>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleInput}
                style={{ padding: "3px" }}
              />
            </div>

            <div className="input-field">
              <p>Email</p>
              <input
                name="email"
                type="Email"
                placeholder="Email"
                onChange={handleInput}
                style={{ padding: "3px" }}
              />
            </div>

            <div className="input-field">
              <p>Password</p>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleInput}
                style={{ padding: "3px" }}
              />
            </div>

            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
