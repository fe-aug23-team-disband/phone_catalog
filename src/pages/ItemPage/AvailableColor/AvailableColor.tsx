import React from "react";
import { Link } from "react-router-dom";
import styles from "./AvailableColor.module.scss";
import cn from "classnames";
import { Color } from "../../../types/Color";
import { Product } from "../../../types/Product";

type Props = {
  data: Product,
  selectedColor: Color | null,
  handleColorChange: (value: Color) => void,
};

export const AvailableColor: React.FC<Props> = ({
  data,
  selectedColor,
  handleColorChange,
}) => {
  // const { productId } = useParams();
  // якщо я правильно розумію то тут треба тільки витягнути правильні дані

  const { colors } = data;

  return (
    <div className={styles["available-colors"]}>
      <div className={styles["available-colors__text"]}>
        <p className="available-colors__title">
          Available colors
        </p>

        <p className="available-colors__id">
          ID: 123456789
        </p>
      </div>

      <div className={`${styles["available-colors__list"]}`}>
        {colors.map(color => {
          const { id, hex } = color;
          return (
            <Link
              key={id}
              // тут треба буде замінити посилання
              to={`/products/${color}`}
              className={cn(styles["available-color"], {
                [styles.active]: selectedColor?.id === id,
              })}
              onClick={() => handleColorChange(color)}
            >
              <div className={styles.circle} style={{ backgroundColor: hex }} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
