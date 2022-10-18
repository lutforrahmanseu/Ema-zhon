import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

import "./SignUp.css";
const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password.length < 6) {
      setError("password should be 6 characters long");
      return;
    }

    if (password !== confirm) {
      setError("your password did not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {});
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id=""
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id=""
            required
          />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            id=""
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="pera-text">
        Already have an account <Link to="/login">Login</Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
