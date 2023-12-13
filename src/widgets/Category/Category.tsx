import styles from "./Category.module.scss";
import { CategoryCard } from "../../entities/CategoryCard/CategoryCard";

import ImagePhone from "./categories/banner-phones.png";
import ImageTablet from "./categories/banner-tablets.png";
import ImageAccessories from "./categories/banner-accessories.png";

const colors = ["#6D6474", "#8D8D92", "#973D5F"];

export const Category = () => {
  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>Shop by category</h2>
      <div className={styles.category__products}>
        <CategoryCard
          link={"phones"}
          backgroundColor={colors[0]}
          image={ImagePhone}
          title="Mobile phones"
          amount={92}
        />

        <CategoryCard
          link={"tablets"}
          backgroundColor={colors[1]}
          image={ImageTablet}
          title="Tablets"
          amount={24}
        />

        <CategoryCard
          link={"accessories"}
          backgroundColor={colors[2]}
          image={ImageAccessories}
          title="Accessories"
          amount={18}
        />
      </div>
    </div>
  );
};
