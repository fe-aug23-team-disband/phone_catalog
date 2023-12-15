export const PriceSection = () => {
  return (
    <div className="priseSection__container">
      <div className="priceSection__prices">
        <p className="priceSection__price--new"></p>

        <p className="priceSection__price--old"></p>
      </div>

      <div className="priceSection__buttons">
        <button className="priceSection__add">
          Add to cart
        </button>

        <button className="priceSection__wishes">
          💗
        </button>
      </div>
    </div>
  );
};
