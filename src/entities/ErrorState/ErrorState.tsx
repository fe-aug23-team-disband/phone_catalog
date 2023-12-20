import styles from "./ErrorState.module.scss";
import ErrorImage from "../../static/ErrorState/mentor.png";

console.log(ErrorImage);

export const ErrorState = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Сторінка трішки по дебільному написана 👨🏻‍💻👩🏻‍🦽</p>
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
