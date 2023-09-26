import TopNavbar from "./TopNavBar";
import ProductSaleBar from "./ProductSaleBar";
import ProductGrid from "./ProductGrid";

const MasterContainer = () => {
  return (
    <div className="container">
      <TopNavbar />
      <ProductSaleBar />
      <ProductGrid />
    </div>
  );
};

export default MasterContainer;
