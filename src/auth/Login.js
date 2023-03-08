import "./Login.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
import CommonContext from "../context/commonContext";
function Login() {
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const { isLoggedIn, SetIsLoggedIn } = useContext(CommonContext);

  const registerSubmit = (e) => {
    e.preventDefault();
    try {
      const data = {
        username: registerInput.username,
        password: registerInput.password,
      };
      // console.log(data);
      fetch(`${API}/users/login`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((inv) => {
          if (inv.message == "Successfully Login") {
            console.log(inv.message);
            localStorage.setItem("x-auth-token", inv.token);
            localStorage.setItem("id", inv.id);
            localStorage.setItem("user", inv.user);
            SetIsLoggedIn(true);
            navigate("/");
          } else {
            console.log(inv.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return isLoggedIn ? (
    navigate("/")
  ) : (
    <>
      <div className="auth">
        <div className="auth-container">
          <div className="sign-up body"></div>
          <h1>User's Login</h1>
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
              <p>Password</p>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleInput}
                style={{ padding: "3px" }}
              />
            </div>

            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
