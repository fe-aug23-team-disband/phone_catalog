import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AvailableColor.module.scss";
import cn from "classnames";

type Props = {
  color: string,
  selectedColor: string,
  onClick: () => void,
  link: string,
};

export const AvailableColor: React.FC<Props> = ({
  color,
  link,
  selectedColor,
  onClick,
}) => {
  return (
    <NavLink
      to={link}
      className={cn(styles["available-color"], {
        [styles.active]: selectedColor === color,
      })}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};
