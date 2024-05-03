import PageHeader from "../../Components/PageHeader/PageHeader";
import Products from "./Products";

function Product() {
  return (
    <>
      <PageHeader name="Product" />
      <div className="container">
        <div className="product-categories">
          <Products />
          <Products />
          
        </div>
      </div>
    </>
  );
}

export default Product;
