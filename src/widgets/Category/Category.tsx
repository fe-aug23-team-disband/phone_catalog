import styles from "./Category.module.scss";
import { CategoryCard } from "../../entities/CategoryCard/CategoryCard";
import { useEffect, useState } from "react";
import { Categories } from "../../types/Categories";
import { get } from "../../app/api/productsClient/get";

import ImagePhone from "../../static/Category/banner-phones.png";
import ImageTablet from "../../static/Category/banner-tablets.png";
import ImageAccessories from "../../static/Category/banner-accessories.png";

const colors = ["#6D6474", "#8D8D92", "#973D5F"];

export const Category = () => {
  const [totalPhones, setTotalPhones] = useState(0);
  const [totalTablets, setTotalTablets] = useState(0);
  const [totalAccessories, setTotalAccessories] = useState(0);

  async function setTotalCategory(category: Categories, setData: (total: number) => void) {
    const data = await get({ category: category, page: null, limit: null, query: null });
    setData(data.total);
  }

  useEffect(() => {
    setTotalCategory("phones", setTotalPhones);
    setTotalCategory("tablets", setTotalTablets);
    setTotalCategory("accessories", setTotalAccessories);
  }, []);

  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>Shop by category</h2>
      <div className={styles.category__products}>
        <CategoryCard
          backgroundColor={colors[0]}
          link={"phones"}
          image={ImagePhone}
          title="Mobile phones"
          amount={totalPhones}
        />

        <CategoryCard
          backgroundColor={colors[1]}
          link={"tablets"}
          image={ImageTablet}
          title="Tablets"
          amount={totalTablets}
        />

        <CategoryCard
          backgroundColor={colors[2]}
          link={"accessories"}
          image={ImageAccessories}
          title="Accessories"
          amount={totalAccessories}
        />
      </div>
    </div>
  );
};
