import styles from "./Category.module.scss";
import { CategoryCard } from "./CategoryCard/CategoryCard";

import ImagePhone from "./categories/banner-phones.png";
import ImageTablet from "./categories/banner-tablets.png";
import ImageAccessories from "./categories/banner-accessories.png";

const colors = ["#6D6474", "#8D8D92", "#973D5F"];

export const Category = () => {
  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>Shop by category</h2>
      <div className={styles.category__products}>
        {/* <article className={`${styles.category__product}`}>
          <div className={`${styles.category__card} ${styles["category__card--color-1"]}`}>
            <img
              className={styles.image}
              src={ImagePhone}
              alt="Mobile phones"
            />
          </div>

          <h4 className={`${styles["category__product-title"]}`}>
            Mobile phones
          </h4>
          <p className={`${styles["category__product-description"]}`}>
            95 models
          </p>
        </article>

        <article className={`${styles.category__product}`}>
          <div className={`${styles.category__card} ${styles["category__card--color-2"]}`}>
            <img
              className={styles.image}
              src={ImageTablet}
              alt="Mobile phones"
            />
          </div>

          <h4 className={`${styles["category__product-title"]}`}>
            Tablets
          </h4>
          <p className={`${styles["category__product-description"]}`}>
            24 models
          </p>
        </article>

        <article className={`${styles.category__product}`}>
          <div className={`${styles.category__card} ${styles["category__card--color-3"]}`}>
            <img
              className={styles.image}
              src={ImageAccessories}
              alt="Mobile phones"
            />
          </div>

          <h4 className={`${styles["category__product-title"]}`}>
            Accessories
          </h4>
          <p className={`${styles["category__product-description"]}`}>
            100 models
          </p>
        </article> */}

        <CategoryCard
          backgroundColor={colors[0]}
          image={ImagePhone}
          title="Mobile phones"
          amount={92}
        />

        <CategoryCard
          backgroundColor={colors[1]}
          image={ImageTablet}
          title="Tablets"
          amount={24}
        />

        <CategoryCard
          backgroundColor={colors[2]}
          image={ImageAccessories}
          title="Accessories"
          amount={18}
        />
      </div>
    </div>
  );
};
