import React from "react";
import { useLoaderData } from "react-router-dom";
import {ProductResponse} from "../../types/ProductResponse";
import {AsyncWrapper} from "../../shared/AsyncWrapper/AsyncWrapper";
import {useAsyncValue} from "react-router";

interface Props {
}

export const CatalogPage: React.FC<Props> = () => {
  const { data } = useLoaderData() as { data: Promise<ProductResponse> };

  return (
    <AsyncWrapper data={data} Loader={<p>Loading</p>} Error={<p>Loading</p>}>
      <TestComponent />
    </AsyncWrapper>
  );
};

const TestComponent: React.FC = () => {
  const data = useAsyncValue() as ProductResponse;

  return (
    <p>{data.count}</p>
  );
};
