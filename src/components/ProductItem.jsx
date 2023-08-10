import { Link } from "react-router-dom";
import CartButton from "../shared/CartButton";
import FormattedPrice from "./FormattedPrice";

const ProductItem = ({ item }) => {
  return (
    <div className="productList">
      <img src={item.icon} alt="pen" className="productImage" />
      <br />
      <Link to="/details">
        <h2>{item.name}</h2>
      </Link>

      <h3>
        <FormattedPrice value={item.price} />
      </h3>

      <CartButton item={item}></CartButton>
    </div>
  );
};

export default ProductItem;
