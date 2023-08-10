import ProductItem from "./ProductItem";
import CartButton from "../shared/CartButton";

const ProductList = ({ products }) => {
  return (
    <div className="productList">
      {products.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
};

export default ProductList;
