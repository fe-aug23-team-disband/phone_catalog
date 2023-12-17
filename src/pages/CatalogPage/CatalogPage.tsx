import React from "react";
import { useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ProductResponse } from "../../types/ProductResponse";
import { AsyncWrapper } from "../../shared/AsyncWrapper/AsyncWrapper";
import { useAsyncValue } from "react-router";
import { ItemCard } from "../../entities/ItemCard/ItemCard";
import styles from "./CatalogPage.module.scss";

interface Props {}

export const CatalogPage: React.FC<Props> = () => {
  const { data } = useLoaderData() as { data: Promise<ProductResponse> };

  return (
    <AsyncWrapper data={data} Loader={<p>Loading</p>} Error={<p>Loading</p>}>
      <CategoryProducts />
    </AsyncWrapper>
  );
};

const CategoryProducts: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const data = useAsyncValue() as ProductResponse;

  console.log(data.data);

  return (
    <>
      {category === "phones" && <h1>Mobile phones</h1>}
      {category === "tablets" && <h1>Tablets</h1>}
      {category === "accessories" && <h1>Accessories</h1>}

      <p className="count_models">{data.count} models</p>
      <div className={styles.products}>
        {data.data.map(item => (
          <ItemCard key={item.id} phone={item} />
        ))}
      </div>
    </>
  );
};
