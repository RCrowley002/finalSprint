import { Link } from "react-router-dom";

const CheckoutButton = () => {
  return (
    <Link to="/checkout">
      <button className="btn2">Checkout</button>
    </Link>
  );
};

export default CheckoutButton;
