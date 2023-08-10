import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <button className="btn1">Go Back</button>
    </Link>
  );
};

export default BackButton;
