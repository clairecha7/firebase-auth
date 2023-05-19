import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      navigate("/profile");
    });
  };
  return (
    <div className="center">
      <div className="auth">
        <h1>Log In</h1>
        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Create one here! </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
