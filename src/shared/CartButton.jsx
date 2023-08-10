import { BsCartPlusFill } from "react-icons/bs";

const CartButton = ({ item }) => {
  const showDetails = () => {
    console.log(item.name);
  };
  return (
    <button className="btn1" onClick={showDetails}>
      <BsCartPlusFill /> Add to Cart
    </button>
  );
};

export default CartButton;
