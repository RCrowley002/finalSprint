import { Link } from "react-router-dom";

const CheckoutButton = () => {
  return (
    <Link to="/checkout">
      <button className="btn1">Checkout</button>
    </Link>
  );
};

export default CheckoutButton;
