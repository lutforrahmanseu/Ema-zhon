import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOutBtn = () => {
    logOut()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <nav className="header">
      <img src={logo} alt="Logo" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/Inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button className="logout-btn" onClick={handleLogOutBtn}>
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
