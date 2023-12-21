import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useAsyncValue } from "react-router";
import { ItemCard } from "../../../entities/ItemCard/ItemCard";
import styles from "../CatalogPage.module.scss";
import { ProductResponse } from "../../../types/ProductResponse";
import { PageButton } from "../../../shared/ui/PageButton/PageButton";
import { PageChangeButton } from "../../../shared/ui/PageChangeButton/PageChangeButton";
import { getNumbers } from "../../../shared/utils/getNumbers";
import { ItemCardState } from "../../../entities/ItemCardState/ItemCardState";
import crossIcon from "../../../static/Catalog/cross.svg";

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

  const pages = (state) ? [] : getNumbers(0, (data.total / +params.limit));

  const [currentPage, setCurrentPage] = useState(params.page);
  const [limit, setLimit] = useState(params.limit);
  const [sort, setSort] = useState({ type: "", isDesc: false });
  const [query, setQuery] = useState(params.query);

  const stateArray = arrayRange(1, +limit, 1);

  useEffect(() => {
    setSearchParams(params => {
      params.set("page", currentPage.toString());
      params.set("limit", limit.toString());
      if (query) {
        params.set("query", query?.toString());
      }
      if (sort.type) {
        params.set("sortBy", sort.type);
        params.set("desc", sort.isDesc.toString());
      }
      return params;
    });
  }, [currentPage, limit, query, sort]);

  useEffect(() => {
    setCurrentPage(() => "0");
    setLimit(() => params.limit);
    setSort({ type: "", isDesc: false });
    setQuery(() => "");
  }, [category]);

  const handleLimitChange = (value: string) => {
    setCurrentPage("0");
    setLimit(value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [type, order = "asc"] = event.target.value.split("-");
    setSort({
      type,
      isDesc: order === "desc"
    });
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setQuery("");
      searchParams.delete("query");
    } else {
      setQuery(event.target.value);
    }
  };

  const handleCrossClick = () => {
    setQuery("");
    searchParams.delete("query");
  };

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
            onChange={handleSortChange}
            defaultValue={"name"}
          >
            <option className={styles.selectors__Option} value="time">Newest</option>
            <option className={styles.selectors__Option} value="time-desc">Oldest</option>
            <option className={styles.selectors__Option} value="price">Price ascending</option>
            <option className={styles.selectors__Option} value="price-desc">Price descending</option>
            <option className={styles.selectors__Option} value="name">Alphabet</option>
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
              <option className={styles.selectors__Option} key={number} value={number} selected={number === +limit}>{number}</option>)}
          </select>
        </div>

        <div className={styles.selectors__Wrapper}>
          <label htmlFor="searchBar" className={styles.selectors__Label}>Search</label>

          <div className={styles.selectors__Search}>
            <input
              className={styles.selectors__Search__Input}
              type="text"
              onChange={handleQueryChange}
              value={query}
              placeholder="Input text..."
            />
            <button
              type="button"
              className={styles.selectors__Search__Button}
              onClick={handleCrossClick}
            >
              <img src={crossIcon} alt="delete" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.products}>
        {(!state && data.total === 0) &&
          <h2 className={styles.products__nothing_found}>
            Nothing found by query {`${params.query}`}
          </h2>
        }

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
