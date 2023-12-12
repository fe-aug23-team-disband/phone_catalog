import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
import logo from "./not_found.png";

export const NotFoundPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.error__message}>
        <h1 className={styles.title}>Sorry, this page could not be found</h1>
        <p className={styles.description}>
          The link is broken or the page no longer exists.
        </p>
        <p className={styles.description}>
          Go to the <Link className={styles.homepage__link} to="/">homepage</Link>.
        </p>
      </div>
      <img className={styles.error__image} src={logo} alt="Page not found" />
    </div>
  );
};
