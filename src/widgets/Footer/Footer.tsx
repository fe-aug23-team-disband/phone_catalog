import { Link } from "react-router-dom";
import main_styles from "../../styles/main.module.scss";
import styles from "./Footer.module.scss";
import logoImg from "../../static/Footer/logo.png";
import topIcon from "../../static/Footer/button-top.png";
import ButtonIcon from "./ButtonIcon";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_inside} ${main_styles.mainContent}`}>
        <Link className={styles.footer_logo_link} to="/">
          <img className={styles.footer_logo_img} src={logoImg} alt="logo" />
        </Link>

        <nav className={styles.footer_navigation}>
          <Link to={"/github"}>Github</Link>
          <Link to={"/contacts"}>Contacts</Link>
          <Link to={"/rights"}>rights</Link>
        </nav>

        <div className={styles.footer_swipe_top}>
          <p className={styles.footer_swipe_top_title}>Back to top</p>
          <a href={"#top"}>
            <ButtonIcon icon={topIcon} size="small" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
