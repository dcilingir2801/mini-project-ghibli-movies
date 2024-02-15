import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className={styles.navbar}>
        <div className={styles["navbar-image"]}>
          <Link to="/">
            <img src="../assets/Studio_Ghibli-logo-78E2716B50-seeklogo.com.png" />
          </Link>
        </div>
        <div className={styles["navbar-links"]}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About Studio Ghibli</p>
          </Link>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <Link to="/logout">
            <p>Logout</p>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-image"]}>
        <Link to="/">
          <img src="../assets/Studio_Ghibli-logo-78E2716B50-seeklogo.com.png" />
        </Link>
      </div>
      <div className={styles["navbar-links"]}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About Studio Ghibli</p>
        </Link>

        <Link to="/signin">
          <p>Log In</p>
        </Link>
        <Link to="/signup">
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
