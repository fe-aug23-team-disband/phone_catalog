import React from "react";
import { useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ProductResponse } from "../../types/ProductResponse";
import { AsyncWrapper } from "../../shared/AsyncWrapper/AsyncWrapper";
import { useAsyncValue } from "react-router";
import { ItemCard } from "../../entities/ItemCard/ItemCard";
import styles from "./CatalogPage.module.scss";
import { PageButton } from "../../shared/PageButton/PageButton";
import { PageChangeButton } from "../../shared/PageChangeButton/PageChangeButton";

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

  const page: number = 5;
  let pagiArray;

  switch (page) {
  case 1:
    pagiArray = [(page), (page + 1), (page + 2)];
    break;
  case 2:
    pagiArray = [(page - 1), (page), (page + 1), (page + 2)];
    break;
  case 4:
    pagiArray = [(page - 2), (page - 1), (page), (page + 1)];
    break;
  case 5:
    pagiArray = [(page - 2), (page - 1), (page)];
    break;
  default:
    pagiArray = [(page - 2), (page - 1), (page), (page + 1), (page + 2)];
  }

  const data = useAsyncValue() as ProductResponse;

  return (
    <>
      {category === "phones" && <h1 className={styles.title}>Mobile phones</h1>}
      {category === "tablets" && <h1 className={styles.title}>Tablets</h1>}
      {category === "accessories" && <h1 className={styles.title}>Accessories</h1>}

      <p className={styles.modelCount}>{data.count} models</p>

      <div className={styles.selectors}>
        <div className={styles.selectors__Wrapper}>
          <label htmlFor="Sort by" className={styles.selectors__Label}>Sort by</label>

          <select name="Sort by" id="Sort" className={styles.selectors__Sort}>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Price ascending">Price ascending</option>
            <option value="Price descending">Price descending</option>
            <option value="Alphabet">Alphabet</option>
          </select>
        </div>

        <div className={styles.selectors__Wrapper}>
          <label htmlFor="Items on page" className={styles.selectors__Label}>Items on page</label>

          <select name="Items on page" id="Items" className={styles.selectors__Items}>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>
      <div className={styles.products}>
        {data.data.map(item => (
          <ItemCard key={item.id} phone={item} />
        ))}
      </div>

      <div className={styles.pagination}>
        <PageChangeButton direction="prev" selected={page} />
        <div className={styles.pagination__Pages}>
          {pagiArray.map(pageNumber => (
            <PageButton key={page} pageNumber={pageNumber} selected={page} />
          ))}
        </div>
        <PageChangeButton direction="next" selected={page} />
      </div>
    </>
  );
};
