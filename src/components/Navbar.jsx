import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({isLoggedIn, setIsLoggedIn}) {
  if (isLoggedIn) {
    return (
      <div className={styles.navbar}>
        <div className={styles["navbar-image"]}>
          <Link to="/">
            <img src="/src/assets/ghibli-logo.png" />
          </Link>
        </div>
        <div className={styles["navbar-links"]}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>About Studio Ghibli</p>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <Link to="/logout">
            <button>Logout</button>
          </Link>
        </div>
      </div>
    );
  }  
    return (
      <div className={styles.navbar}>
        <div className={styles["navbar-image"]}>
          <Link to="/">
            <img src="/src/assets/ghibli-logo.png" />
          </Link>
        </div>
        <div className={styles["navbar-links"]}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>About Studio Ghibli</p>
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
