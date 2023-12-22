import styles from "./ErrorState.module.scss";
import ErrorImage from "../../static/ErrorState/mentor.png";
import { Link } from "react-router-dom";

export const ErrorState = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__titles}>
        <p className={styles.title}>Сторінка трішки по дебільному написана</p>
        <Link to={"/"} className={styles.link}>Повернутися на головну</Link>
      </div>
      <div className={styles.animation}>
        <img
          src={ErrorImage}
          alt="Error"
          className={styles.animation__image}
        />
      </div>
    </div>
  );
};
