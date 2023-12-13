import {useLoaderData} from "react-router-dom";
import {Product} from "../../types/Product";
import React from "react";
import {useAsyncValue} from "react-router";
import {AsyncWrapper} from "../../shared/AsyncWrapper/AsyncWrapper";

export const ItemPage = () => {
  const { product } = useLoaderData() as { product: Promise<Product> };

  return (
    <AsyncWrapper data={product} Loader={<p>Loading</p>} Error={<p>Loading</p>}>
      <TestComponent />
    </AsyncWrapper>
  );
};

const TestComponent: React.FC = () => {
  const data = useAsyncValue() as Product;

  return (
    <p>{data.name}</p>
  );
};
