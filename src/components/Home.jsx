import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <h2>Pens of Haute Culture</h2>
      <img src="" alt="Logo" className="logoMain" />

      <div className="homeImages">
        <img src="/images/pen7.jpg" alt="Pen" />
        <img src="/images/pen14.jpg" alt="Pen" />
        <img src="/images/pen3.jpg" alt="Pen" />
      </div>
      <Link to="/products" className="enter">
        Enter
      </Link>
      <br />
      <div className="socials">
        <FaInstagram className="socialsIcons" />
        <MdOutlineMail className="socialsIcons" />
        <FaFacebook className="socialsIcons" />
      </div>
    </div>
  );
};

export default Home;
