import React from "react";
import { Link } from "react-router-dom";
import styles from "./AvailableColor.module.scss";
import cn from "classnames";

type Props = {
  colors: string[],
  selectedColor: string,
  handleColorChange: (v: string) => void,
  link: string,
};

export const AvailableColor: React.FC<Props> = ({
  colors,
  link,
  selectedColor,
  handleColorChange,
}) => {
  return (
    <div className="available-colors">
      <div className="available-colors__text">
        <p className="available-colors__title">
          Available colors
        </p>

        <p className="available-colors__id">
          ID: 123456789
        </p>
      </div>

      {/* скоріш за все тут треба буде створити окрему компоненту для круга, але поки залишу так */}

      <div className="available-colors__list">
        {colors.map(color => (
          <Link
            key={color}
            to={link}
            className={cn(styles["available-color"], {
              [styles.active]: selectedColor === color,
            })}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
};
