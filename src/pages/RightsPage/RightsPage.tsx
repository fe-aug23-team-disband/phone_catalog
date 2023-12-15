import styles from "./RightsPage.module.scss";
import rightsData from "./rights.json";

export const RightsPage = () => {
  const rights = rightsData;
  const pageTitle = rights[0].content;

  return (
    <div className={styles.rights}>
      <h1 className={styles.rights__title}>
        {pageTitle}
      </h1>
      {rights.slice(1).map(({ title, content }, index) => (
        <div key={index} className={styles.rights__content}>
          <h2 className={styles.rights__subtitle}>
            {title}
          </h2>
          <p className={styles.rights__description}>
            {content}
          </p>
        </div>
      ))}
    </div>
  );
};
