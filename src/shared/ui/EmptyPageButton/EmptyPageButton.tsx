import { Link } from "react-router-dom";
import globalVariables from "../../../static/variables";
import styles from "./EmptyPageButton.module.scss";

export const EmptyPageButton = ({ page }: { page: "favorites" | "cart" }) => {
  return (
    <Link to={globalVariables.patchToPhones} className={styles.Empty}>
      <button className={styles.Empty__Button}>
        <div className={styles.Empty__Button__Text}>
          {page === "favorites"
            ? "Find something you like!"
            : "Find something to purchase!"
          }
        </div>
      </button>
    </Link>
  );
};
