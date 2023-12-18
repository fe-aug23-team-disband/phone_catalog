import styles from "./AddToCartButtonState.module.scss";
import React from "react";
import classNames from "classnames";

interface Props {
  state?: "loading" | "error";
}

export const AddToCartButtonState: React.FC<Props> = ({ state }) => {

  return (
    <button
      type="button"
      className={classNames(
        styles.NotAdded,
        {
          [styles.Added]: state === "error",
        }
      )}
      disabled
    >
      {state === "loading"
        ? <div className={styles.Text}>Loading</div>
        : <div className={styles.Text}>Error</div>
      }
    </button>
  );
};
