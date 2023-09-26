import styles from "./ProductSaleBar.module.css";

const ProductSaleBar = () => {
  return (
    <div className={styles.div_top_hypers}>
      <ul className={styles.ul_top_hypers}>
        <li>
          <a className={styles.productItemLink} href="#">
            FIREARMS
          </a>
        </li>
        <li>
          <a className={styles.productItemLink} href="#">
            MAGAZINES
          </a>
        </li>
        <li>
          <a className={styles.productItemLink} href="#">
            PARTS
          </a>
        </li>
        <li>
          <a className={styles.productItemLink} href="#">
            PARTS KITS
          </a>
        </li>
        <li>
          <a className={styles.productItemLink} href="#">
            SURPLUS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductSaleBar;
