import { DeveloperCard } from "../../entities/DeveloperCard/DeveloperCard";
import { Developer } from "../../types/Developer";
import developers from "./contacts.json";
import styles from "./ContactsPage.module.scss";

export const ContactsPage = () => {
  const devs = developers;

  return (
    <>
      <h1 className={styles.heading}>Our developers</h1>
      <div className={styles.cards__container}>
        {devs.map((developer: Developer) =>
          <DeveloperCard key={developer.name} developer={developer} />)}
      </div>
    </>
  );
};
