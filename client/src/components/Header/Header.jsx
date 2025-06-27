import React from "react";
import { Link, useNavigate,  } from "react-router-dom"; 
import classes from "./Header.module.css";
import logo from "../../images/evangadi-logo.png";

// isLoggedIn (boolean): whether the user is currently logged in.
// handleLogout (function): a function to call when the user logs out.

function Header({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();
  console.log("Header isLoggedIn:", isLoggedIn);
  const handleLogoutLogin = (e) => {
    if (e.target.name === "signin") {
      navigate("/");
      // If the button clicked has a name attribute of "signin", navigate to the homepage ("/").
    } else {
      handleLogout();
      navigate("/");
    }
    // else (for logout button), call the handleLogout function, then navigate to homepage.
  };
  return (
    <header className={classes.header_container}>
      <div className={classes.header_content}>
        <Link to="/" className={classes.logo_link}>
          <img src={logo} alt=" Logo" />
        </Link>
        <nav className={classes.nav_links}>
          <Link to="/home" className={classes.nav_link}>
            Home
          </Link>

          {/* by Clicking the logo navigates to the homepage ("/") without a full page reload. */}

          <Link to="/about" className={classes.nav_link}>
            How it works
          </Link>

          {/* Starts a conditional rendering block */}
          {/* If isLoggedIn is true, render the logout button; else render the sign-in button */}

          {isLoggedIn ? (
            <button
              onClick={handleLogoutLogin}
              name="signout"
              className={`${classes.auth_button} ${classes.logout}`}
            >
              LOG OUT
            </button>
          ) : (


            // Has a click handler handleLogoutLogin (calls logout logic).
            // Has a name attribute "signout" to distinguish from sign-in.


            <button
              name="signin"
              type="submit"
              onClick={handleLogoutLogin}
              className={`${classes.auth_button} ${classes.login}`}
            >
              SIGN IN
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
