import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CapacityAvailable.module.scss";
import cn from "classnames";

type Props = {
  capacity: string,
  link: string,
  selectedCapacity: string,
  onClick: () => void,
};

export const CapacityAvailable: React.FC<Props> = ({
  capacity,
  link,
  selectedCapacity,
  onClick,
}) => {
  return (
    <div className="capacityAvailable">
      <p className="capacityAvailable__title">
        Select capacity
      </p>

      <NavLink
        to={link}
        className={cn(styles["available-capacity"], {
          [styles["available-capacity-active"]]: capacity === selectedCapacity
        })}
        onClick={onClick}
      >
        {capacity}
      </NavLink>
    </div>
  );
};
