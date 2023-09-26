import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

const ProductGrid = () => {
  return (
    <div className={styles["product-grid"]}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductGrid;
