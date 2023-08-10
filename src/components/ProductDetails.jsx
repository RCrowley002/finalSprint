import BackButton from "../shared/BackButton";
import CartButton from "../shared/CartButton";
import FormattedPrice from "./FormattedPrice";
import { useParams } from "react-router-dom";

const ProductDetails = ({ item }) => {
  const { id } = useParams();
  return (
    <div>
      <img src={`/${item[id - 1].icon}`} alt="pen" className="productImage" />
      <h2>{item[id - 1].name}</h2>
      <h3>
        <FormattedPrice value={item[id - 1].price} />
      </h3>
      <h3>{item[id - 1].description}</h3>
      <CartButton item={item[id - 1]}></CartButton>
      <BackButton></BackButton>
    </div>
  );
};

export default ProductDetails;
