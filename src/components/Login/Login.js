import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
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
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="pera-text">
        New to EmaZon join <Link to="/signup">Create a New Account</Link>
      </p>
    </div>
  );
};

export default Login;
