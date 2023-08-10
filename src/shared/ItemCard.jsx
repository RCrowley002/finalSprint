import FormattedPrice from "../components/FormattedPrice";
import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

const ItemCard = ({ item }) => {
  // code for remove item button to function
  const { deleteFromCart } = useContext(ShoppingCartContext);

  const handleRemove = () => {
    deleteFromCart(item.id);
  };

  return (
    <div className="card">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>
        price - <FormattedPrice value={item.price} />
      </p>
      <h2>Quantity {item.quantity}</h2>
      <button className="btn2 top-right" onClick={handleRemove}>
        Remove Item
      </button>
    </div>
  );
};

export default ItemCard;
