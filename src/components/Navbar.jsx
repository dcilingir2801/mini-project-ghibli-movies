import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <Link to="/">
      <img src="/src/assets/ghibli-logo.png" />
      </Link>
    </nav>
  );
}

export default Navbar;
