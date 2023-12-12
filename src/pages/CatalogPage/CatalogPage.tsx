interface Props {
  type: "phones" | "tablets" | "accessories"
}

export const CatalogPage: React.FC<Props> = ({ type }) => {
  return (
    <h1>
      {type}
    </h1>
  );
};
