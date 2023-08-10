import { Link } from "react-router-dom";
import CartButton from "../shared/CartButton";
import FormattedPrice from "./FormattedPrice";

const ProductItem = ({ item }) => {
  return (
    <div className="productList">
      <Link to={`/details/${item.id}`}>
        <img src={item.icon} alt="pen" className="productImage" />
      </Link>
      <br />
      <Link to={`/details/${item.id}`}>
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
