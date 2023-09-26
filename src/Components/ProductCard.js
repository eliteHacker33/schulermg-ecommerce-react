import styles from "./ProductCard.module.css";
import gun from "../img/1970-BK-4593.jpg";

const ProductCard = () => {
  return (
    <div className={styles["product-card-container"]}>
      <a href="#" className="goToGunDetails" />
      <img className={styles["product-image"]} src={gun}></img>
      <div className={styles["product-card-description"]}> fake gun</div>
      <div className={styles["product-price-information"]}>
        you wish you knew the price
      </div>
    </div>
  );
};

export default ProductCard;
