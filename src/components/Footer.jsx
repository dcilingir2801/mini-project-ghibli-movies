import styles from "./Footer.module.css";

const logoFooter = "src/assets/Studio-Ghibli-logo-78E2716B50-seeklogo.com.png"

function Footer() {
    return (
        <div className={styles["footer"]}>
            <div className={styles["footer-links"]}>
                <a href="https://github.com/dcilingir2801/mini-project-ghibli-movies">Studio Ghibli Movie Database - Github Repo</a>
                <a href="https://www.linkedin.com/in/denizcilingir/">Linkedin Profile</a>
            </div>
            <div className={styles["footer-img"]}>
                <img src={logoFooter}/>
            </div>
        </div>
    )
}

export default Footer;