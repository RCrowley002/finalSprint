import { Link } from "react-router-dom";
import CartButton from "../shared/CartButton";
import FormattedPrice from "./FormattedPrice";

const ProductItem = ({ item }) => {
  return (
    <div className="productItem">
      <div className="itemDisplay">
        <Link to={`/details/${item.id}`}>
          <img src={item.icon} alt="pen" className="productImage" />
        </Link>
      </div>
      <div className="price">
        <FormattedPrice value={item.price} />
      </div>

      <div className="productLabel">
        <Link to={`/details/${item.id}`}>
          <h2>{item.name}</h2>
        </Link>
      </div>
      <CartButton item={item}></CartButton>
    </div>
  );
};

export default ProductItem;
