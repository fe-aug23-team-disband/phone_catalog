

// eslint-disable-next-line react/prop-types
export const Catalog: React.FC<{type: "phones" | "tablets" | "accessories"}> = ({ type }) => {
  return (
    <h1>{type}</h1>
  );
};
