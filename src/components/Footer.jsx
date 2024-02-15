import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer-links"]}>
                <a href="https://github.com/dcilingir2801/mini-project-ghibli-movies">Studio Ghibli Movie Database - Github Repo</a>
                <a href="https://www.linkedin.com/in/denizcilingir/">Linkedin Profile</a>
            </div>
            <div className={styles["footer-img"]}>
                <img src="/src/assets/Studio_Ghibli-logo-78E2716B50-seeklogo.com.png"/>
            </div>
        </div>
    )
}

export default Footer;