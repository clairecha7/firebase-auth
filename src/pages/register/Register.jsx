import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    if (password === conPass) {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential);
          navigate("/profile");
        }
      );
    } else {
      alert(" Password is not the same as Confirm Password ");
    }
  };

  return (
    <div className="center">
      <div className="auth">
        <h1>Register</h1>
        <form onSubmit={register}>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm your Password"
            value={conPass}
            onChange={(e) => setConPass(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <span>
          Already have an account? <Link to={"/"}>Login Here!</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
