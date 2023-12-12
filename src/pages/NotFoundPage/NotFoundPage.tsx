import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
import ImageError from "./not_found.png";

export const NotFoundPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__error_message}>
        <h1 className={styles.content__title}>
          Sorry, this page could not be found
        </h1>
        <p className={styles.content__description}>
          The link is broken or the page no longer exists.
        </p>
        <p className={`${styles.content__description} ${styles.content__description_go}`}>
          Go to the <Link className={styles.content__description_link} to="/">homepage</Link>.
        </p>
      </div>
      <img className={styles.content__error_image} src={ImageError} alt="Page not found" />
    </div>
  );
};
