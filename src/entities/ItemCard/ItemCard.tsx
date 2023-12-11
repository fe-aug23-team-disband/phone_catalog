import phones from "./phones.json";
import styles from "./ItemCard.module.scss";

export const ItemCard = () => {
  const testPhone = phones[0];
  return (
    <div className={styles.itemCard}>
      <img
        src={`/${testPhone.image}`}
        alt={testPhone.name}
        className={styles.itemCard__Image}
      />

      <div className={styles.itemCard__Title}>
        {testPhone.name}
      </div>

      <div className={styles.itemCard__Price}>
        <div className="ItemCard__Price-Current">{testPhone.price}</div>

        <div className="ItemCard__Price-Full">{testPhone.fullPrice}</div>
      </div>

      <div className="ItemCard__Divider"></div>

      <div className="ItemCard__Specs">
        <div className="ItemCard__Specs-Screen">{testPhone.screen}</div>

        <div className="ItemCard__Specs-Capacity">{testPhone.capacity}</div>

        <div className="ItemCard__Specs-RAM">{testPhone.ram}</div>
      </div>

      <div className="ItemCard__ButtonSection">
        <button className="ItemCard__ButtonSection-AddToCart">Add To Cart</button>

        <button className="ItemCard__ButtonSection-MakeFavorite"></button>
      </div>
    </div>
  );
};
