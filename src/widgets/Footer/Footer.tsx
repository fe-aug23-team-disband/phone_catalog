import { Link } from "react-router-dom";
import main_styles from "../../styles/main.module.scss";
import styles from "./Footer.module.scss";
import logoImg from "../../static/Footer/logo.png";
import topIcon from "../../static/Footer/button-top.png";
import ButtonIcon from "../../shared/ui/ButtonIcon/ButtonIcon";
import { scrollToTop } from "../../shared/utils/ScrollToTop";

const Footer = () => {
  const links = [
    { to: "https://github.com/fe-aug23-team-disband", label: "Github" },
    { to: "/contacts", label: "Contacts" },
    { to: "/rights", label: "Rights" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_inside} ${main_styles.mainContent}`}>
        <Link className={styles.footer_logo_link} to="/" onClick={() => scrollToTop()}>
          <img className={styles.footer_logo_img} src={logoImg} alt="logo" />
        </Link>

        <nav className={styles.footer_navigation}>
          {links.map((link, index) => (
            <Link key={index} to={link.to} target="_blank">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.footer_swipe_top}>
          <p className={styles.footer_swipe_top_title}>Back to top</p>
          <ButtonIcon icon={topIcon} size="small" onClick={() => scrollToTop("smooth")} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
