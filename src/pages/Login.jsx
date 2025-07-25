import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) 
      {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/");

      } else 
      {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      }
    } catch (err) 
    {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="loginpage">
      <div className="wellcomeblock">
        <p>{isLogin ? "Login" : "Signup"}</p>
        <h2>WELCOME</h2>
        <h2>BACK</h2>
      </div>
      <div className="login-container">
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleAuth}>
          <div className="emailinput">
            <h3>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="passwordinput">
            <h3>PassWord</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="submitbtn" type="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)} style={{ color: "blue", cursor: "pointer" }}>
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
     </div>
  );
};

export default Login;
