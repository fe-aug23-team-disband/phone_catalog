// import { Developer } from "../../types/Developer";
import { DeveloperCard } from "../../entities/DeveloperCard/DeveloperCard";
import { Developer } from "../../types/Developer";
import developers from "./contacts.json";

export const ContactsPage = () => {
  const devs = developers;

  return (
    <>
      <h1>Our developers</h1>
      {devs.map((developer: Developer) =>
        <DeveloperCard key={developer.name} developer={developer} />)}
    </>
  );
};
