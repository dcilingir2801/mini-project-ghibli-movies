import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/src/assets/Logo.png" />
      <h1>Movie Explorer</h1>
    </nav>
  );
}

export default Navbar;
