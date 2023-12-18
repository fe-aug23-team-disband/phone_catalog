import React from "react";
import {Link, useLocation} from "react-router-dom";
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
  const location = useLocation();
  const category = location.pathname.replace(data.namespaceId, "");
  const currentColor = selectedColor?.name || "";
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
          const { id, hex, name } = color;
          return (
            <Link
              key={id}
              to={`../${category}${data.namespaceId.replace(currentColor, name)}`}
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
