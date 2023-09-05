import "./ProductSaleBar.css";

const ProductSaleBar = () => {
  return (
    <div className="div_top_hypers">
      <ul className="ul_top_hypers">
        <li>
          <a className="productItemLink" href="#">
            FIREARMS
          </a>
        </li>
        <li>
          <a className="productItemLink" href="#">
            MAGAZINES
          </a>
        </li>
        <li>
          <a className="productItemLink" href="#">
            PARTS
          </a>
        </li>
        <li>
          <a className="productItemLink" href="#">
            PARTS KITS
          </a>
        </li>
        <li>
          <a className="productItemLink" href="#">
            SURPLUS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductSaleBar;
