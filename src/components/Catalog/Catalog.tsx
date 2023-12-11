interface Props {
  type: "phones" | "tablets" | "accessories"
}

export const Catalog: React.FC<Props> = ({ type }) => {
  return (
    <h1>
      {type}
    </h1>
  );
};
