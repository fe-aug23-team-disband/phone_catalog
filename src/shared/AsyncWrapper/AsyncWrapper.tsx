import React from "react";
import {Await} from "react-router";

interface Props<T> {
  data: T,
  Loader: React.ReactNode,
  Error: React.ReactNode
  children: React.ReactNode
}

export const AsyncWrapper: React.FC<Props<Promise<unknown>>> = ({ data, Loader, Error, children }) => {
  return (
    <React.Suspense
      fallback={Loader}
    >
      <Await
        resolve={data}
        errorElement={Error}
      >
        {children}
      </Await>
    </React.Suspense>
  );
};
