import React, { useEffect, useState } from "react";
import styles from "./PhoneProperties.module.scss";

type Props = {
  data: string,
};

type PhoneProperty = {
  screen: string,
  resolution: string
  processor: string,
  ram: string,
};

export const PhoneProperties: React.FC<Props> = ({ data }) => {
  const [details, setDetails] = useState<PhoneProperty | null>(null);

  useEffect(() => {
    const dataFromApi = JSON.parse(data);
    setDetails(dataFromApi);
  }, [data]);

  if (!details) {
    return <p>Loading...</p>;
  }

  const {
    screen,
    resolution,
    processor,
    ram,
  } = details;

  return (
    <div className={`${styles.phoneProperties}`}>
      <div className={`${styles.phoneProperties__container}`}>
        <p className={`${styles.phoneProperties__title}`}>Screen</p>

        <p className={`${styles.phoneProperties__value}`}>
          {screen}
        </p>
      </div>

      <div className={`${styles.phoneProperties__container}`}>
        <p className={`${styles.phoneProperties__title}`}>Resolution</p>

        <p className={`${styles.phoneProperties__value}`}>
          {resolution}
        </p>
      </div>

      <div className={`${styles.phoneProperties__container}`}>
        <p className={`${styles.phoneProperties__title}`}>Processor</p>

        <p className={`${styles.phoneProperties__value}`}>
          {processor}
        </p>
      </div>

      <div className={`${styles.phoneProperties__container}`}>
        <p className={`${styles.phoneProperties__title}`}>RAM</p>

        <p className={`${styles.phoneProperties__value}`}>
          {ram}
        </p>
      </div>
    </div>
  );
};
