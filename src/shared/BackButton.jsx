import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/products">
      <button className="btn2">Go Back</button>
    </Link>
  );
};

export default BackButton;
