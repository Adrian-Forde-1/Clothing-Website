import React from "react";
import { Link } from "react-router-dom";
import AnnouncementTag from "./AnnouncementTag";

const Home = () => {
  return (
    <div className="container-fluid home px-0">
      <AnnouncementTag />
      <div className="homepage-grid-container ">
        <div className="homepage-img item-1">
          <h1 className="homepage-category-title">Men's Clothing</h1>
          <Link to="/men" className="homepage-img-btn">
            Shop Now
          </Link>
        </div>
        <div className="homepage-img item-2">
          <h1 className="homepage-category-title">Women's Clothing</h1>
          <Link to="/women" className="homepage-img-btn">
            Shop Now
          </Link>
        </div>
        <div className="homepage-img item-3">
          <h1 className="homepage-category-title">Sale On Selected Items</h1>
          <Link to="/sale" className="homepage-img-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
