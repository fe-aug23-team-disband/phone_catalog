import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Loading...
      </p>
      <div className={styles.loader}>
        <div className={styles["loader-square"]}></div>
        <div className={styles["loader-square"]}></div>
        <div className={styles["loader-square"]}></div>
        <div className={styles["loader-square"]}></div>
        <div className={styles["loader-square"]}></div>
        <div className={styles["loader-square"]}></div>
        <div className={styles["loader-square"]}></div>
      </div>
    </div>
  );
};
