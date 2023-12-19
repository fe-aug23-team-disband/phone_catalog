import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useAsyncValue } from "react-router";
import { ItemCard } from "../../../entities/ItemCard/ItemCard";
import styles from "../CatalogPage.module.scss";
import { ProductResponse } from "../../../types/ProductResponse";
import { PageButton } from "../../../shared/PageButton/PageButton";
import { PageChangeButton } from "../../../shared/PageChangeButton/PageChangeButton";
import { getNumbers } from "../../../shared/utils/getNumbers";
import { ItemCardState } from "../../../entities/ItemCardState/ItemCardState";

const limits = [16, 24, 48];

const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const CategoryProducts: React.FC<{ state?: "loading" | "error" }> = ({ state }) => {
  const location = useLocation();
  const category = location.pathname.slice(1);

  const data = useAsyncValue() as ProductResponse;
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      page: searchParams.get("page") || "",
      limit: searchParams.get("limit") || "16",
      query: searchParams.get("query") || ""
    };
  }, [searchParams, category]);

  const [currentPage, setCurrentPage] = useState(params.page);
  const [limit, setLimit] = useState(params.limit);
  const [query] = useState(params.query);

  const stateArray = arrayRange(1, +limit, 1);

  useEffect(() => {
    setSearchParams(params => {
      params.set("page", currentPage.toString());
      params.set("limit", limit.toString());
      if (query) {
        params.set("query", query?.toString());
      }
      return params;
    });
  }, [currentPage, limit, query]);

  useEffect(() => {
    setCurrentPage(() => "0");
    setLimit(() => params.limit);
  }, [category]);

  const handleLimitChange = (value: string) => {
    setCurrentPage("0");
    setLimit(value);
  };

  const pages = (state) ? [] : getNumbers(0, (data.total / +params.limit));

  return (
    <>
      {category === "phones" && <h1 className={styles.title}>Mobile phones</h1>}
      {category === "tablets" && <h1 className={styles.title}>Tablets</h1>}
      {category === "accessories" && <h1 className={styles.title}>Accessories</h1>}

      <p className={styles.modelCount}>
        {state
          ? (state === "loading"
            ? "Loading models"
            : "Could not load models"
          )
          : `${data.total} models`
        }
      </p>

      <div className={styles.selectors}>
        <div className={styles.selectors__Wrapper}>
          <label htmlFor="Sort by" className={styles.selectors__Label}>Sort by</label>

          <select
            name="Sort by"
            id="Sort"
            className={styles.selectors__Sort}
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Price ascending">Price ascending</option>
            <option value="Price descending">Price descending</option>
            <option value="Alphabet">Alphabet</option>
          </select>
        </div>

        <div className={styles.selectors__Wrapper}>
          <label htmlFor="Items on page" className={styles.selectors__Label}>Items on page</label>

          <select
            name="Items on page"
            id="Items"
            className={styles.selectors__Items}
            onChange={event => handleLimitChange(event.target.value)}
          >
            {limits.map(number =>
              <option key={number} value={number} selected={number === +limit}>{number}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.products}>
        {state
          ? stateArray.map(id => (
            <ItemCardState key={id} state={state} />
          ))
          : data.data.map(item => (
            <ItemCard key={item.id} phone={item} />
          ))
        }
      </div>

      {pages.length > 1
        && (
          <div className={styles.pagination}>
            <PageChangeButton
              direction="prev"
              selected={+currentPage}
              onPageChange={setCurrentPage}
            />
            <div className={styles.pagination__Pages}>
              {pages.map(pageNumber => (
                <PageButton
                  key={pageNumber}
                  pageNumber={pageNumber}
                  selected={+currentPage}
                  onPageChange={setCurrentPage}
                />
              ))}
            </div>
            <PageChangeButton
              direction="next"
              selected={+currentPage}
              onPageChange={setCurrentPage}
              maxPage={pages.length.toString()}
            />
          </div>
        )
      }
    </>
  );
};
