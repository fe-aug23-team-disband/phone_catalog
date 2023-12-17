import React from "react";
import { NavLink /*, useParams*/ } from "react-router-dom";
import styles from "./CapacityAvailable.module.scss";
import cn from "classnames";
import { Product } from "../../../types/Product";

type Props = {
  data: Product,
  selectedCapacity: string,
  onClick: (value: string) => void,
};

export const CapacityAvailable: React.FC<Props> = ({
  data,
  selectedCapacity,
  onClick,
}) => {
  const { capacityAvailable } = data;

  return (
    <div className={styles.capacityAvailable}>
      <p className={styles.capacityAvailable__title}>
        Select capacity
      </p>

      {capacityAvailable.map(capacity => (
        <NavLink
          key={capacity}
          to={`/products/${data.namespaceId.replace(selectedCapacity.toLowerCase(), capacity.toLowerCase())}`}
          className={cn(styles["available-capacity"], {
            [styles["available-capacity-active"]]: capacity === selectedCapacity
          })}
          onClick={() => onClick(capacity)}
        >
          {capacity}
        </NavLink>
      ))}
    </div>
  );
};
