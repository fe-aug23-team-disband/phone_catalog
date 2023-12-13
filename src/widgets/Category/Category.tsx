import styles from "./Category.module.scss";
import { CategoryCard } from "../../entities/CategoryCard/CategoryCard";

import ImagePhone from "../../static/Category/banner-phones.png";
import ImageTablet from "../../static/Category/banner-tablets.png";
import ImageAccessories from "../../static/Category/banner-accessories.png";

const colors = ["#6D6474", "#8D8D92", "#973D5F"];

export const Category = () => {
  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>Shop by category</h2>
      <div className={styles.category__products}>
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
