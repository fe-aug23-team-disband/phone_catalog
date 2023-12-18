import styles from "./ItemCardState.module.scss";
import { FavoriteButton } from "../../shared/FavoriteButton/FavoriteButton";
import { AddToCartButton } from "../../shared/AddToCartButton/AddToCartButton";
import errorImage from "../../static/ItemCard/1741327.png";

const Specs = ({ category, state }: { category: string; state: "loading" | "error" }) => (
  <div className={styles.itemCard__Specs_Container}>
    <div className={styles.itemCard__Specs_Category}>{category}</div>
    <div className={styles.itemCard__Specs_Value}>
      {state === "loading" ? "Loading" : "Err!"}
    </div>
  </div>
);

export const ItemCardState = ({ state }: { state: "loading" | "error" }) => {
  return (
    <div className={styles.itemCard}>
      {state === "loading"
        ? (<div className={styles.loaderContainer}>
          <div className={styles.load}></div>
        </div>
        )
        : (<div className={styles.errorImageWrapper}>
          <img
            src={errorImage}
            alt="Error"
            className={styles.itemCard__errorImage}
          />
        </div>)
      }

      <div className={styles.itemCard__Title}>
        <div className={styles.itemCard__Title_Text}>
          {state === "loading" ? "Loading, please wait" : "Something went wrong..."}
        </div>
      </div>

      <div className={styles.itemCard__Price}>
        <div className={styles.itemCard__Price_Current}>
          {state === "loading" ? "$---" : "N/a"}
        </div>

        <div className={styles.itemCard__Price_Full}>
          {state === "loading" ? "$---" : "N/a"}
        </div>
      </div>

      <div className={styles.itemCard__Specs}>
        <Specs category="Screen" state={state} />
        <Specs category="Capacity" state={state} />
        <Specs category="RAM" state={state} />
      </div>

      <div className={styles.itemCard__ButtonWrapper}>
        <AddToCartButton state={state} />

        <FavoriteButton state={state} />
      </div>
    </div>
  );
};
