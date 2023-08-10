import CartButton from "../shared/CartButton";
import ProductItem from "./ProductItem";
import CartButton from "../shared/CartButton";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
};

export default ProductList;
