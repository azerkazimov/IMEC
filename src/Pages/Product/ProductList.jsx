import PageHeader from "../../Components/PageHeader/PageHeader";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <>
      <PageHeader name="Products" />

      <div className="container mt-5">
        <div className="row">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
      </div>
    </>
  );
}

export default ProductList;
