import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useAsyncValue } from "react-router";
import { ItemCard } from "../../../entities/ItemCard/ItemCard";
import styles from "../CatalogPage.module.scss";
import { ProductResponse } from "../../../types/ProductResponse";
import { PageButton } from "../../../shared/ui/PageButton/PageButton";
import { PageChangeButton } from "../../../shared/ui/PageChangeButton/PageChangeButton";
import { getNumbers } from "../../../shared/utils/getNumbers";
import { ItemCardState } from "../../../entities/ItemCardState/ItemCardState";
import crossIcon_light from "../../../static/Catalog/cross_light.svg";
import crossIcon from "../../../static/Catalog/cross.svg";
import { ThemeContext } from "../../../app/providers/ThemeProvider";

const limits = [16, 24, 48];
const sorts = [
  { name: "Newest", value: "time" },
  { name: "Oldest", value: "time-desc" },
  { name: "Price ascending", value: "price" },
  { name: "Price descending", value: "price-desc" },
  { name: "Alphabet", value: "name" }
];

const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const CategoryProducts: React.FC<{ state?: "loading" | "error" }> = ({ state }) => {
  const location = useLocation();
  const category = location.pathname.slice(1);
  const { theme } = useContext(ThemeContext);

  const data = useAsyncValue() as ProductResponse;
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      page: searchParams.get("page") || "",
      limit: searchParams.get("limit") || "16",
      query: searchParams.get("query") || "",
      sortBy: searchParams.get("sortBy") || "",
      desc: searchParams.get("desc") || ""
    };
  }, [searchParams, category]);

  const pages = (state) ? [] : getNumbers(0, (data.total / +params.limit));

  const [currentPage, setCurrentPage] = useState(params.page);
  const [limit, setLimit] = useState(params.limit);
  const [sort, setSort] = useState({ type: params.sortBy, isDesc: !!params.desc });
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
    setSort({ type: "time", isDesc: false });
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
          >
            {sorts.map(sort =>
              <option
                key={sort.value}
                className={styles.selectors__Option}
                value={sort.value}
                selected={params.sortBy === sort.value}
              >
                {sort.name}
              </option>
            )}
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
              <option
                className={styles.selectors__Option}
                key={number}
                value={number}
                selected={number === +limit}
              >
                {number}
              </option>)}
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
            {query && <button
              type="button"
              className={styles.selectors__Search__Button}
              onClick={handleCrossClick}
            >
              <img src={theme === "light" ? crossIcon_light : crossIcon} alt="delete" />
            </button>}
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
