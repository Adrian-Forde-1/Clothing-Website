import React from "react";
import { Link } from "react-router-dom";
import AnnouncementTag from "../AnnouncementTag";

const MenCategory = () => {
  return (
    <div className="container-fluid">
      <AnnouncementTag />
      <div className="container mt-5 clothing-category-header">
        <span className="mr-auto">
          <h4>Men</h4>
        </span>
        <div>
          <ul>
            <li>
              <Link to="/men/shirts">Shirts</Link>
            </li>
            <li>
              <Link to="/men/jeans">Jeans</Link>
            </li>
            <li>
              <Link to="/men/shoes">Shoes</Link>
            </li>
            {/* <li>
              <Link to="/men/newreleases">New Releases</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="container-fluid mt-5 category-grid-container">
        <div className="cat-img men-item-1">
          <h1 className="category-title">
            Nike Men's Revolution 5 Running Shoe
          </h1>
          <Link
            to="/men/shoes/menShoeNikeRevolution5Running"
            className="category-img-btn"
          >
            Shop Now
          </Link>
        </div>
        <div className="mt-3 cat-img men-item-2">
          <h1 className="category-title">
            Southpole Men's Active Basic Jogger Fleece Pants
          </h1>
          <Link
            to="/men/shirts/menJeansSouthPoleActiveJogger"
            className="category-img-btn"
          >
            Shop Now
          </Link>
        </div>
        <div className="mt-3 cat-img men-item-3">
          <h1 className="category-title">
            ASICS Men's Gel-Venture 6 Running Shoe
          </h1>
          <Link
            to="/men/shoes/menShoeASCISGelVenture6Running"
            className="category-img-btn"
          >
            Shop Now
          </Link>
        </div>
        <div className="mt-3 cat-img men-item-4">
          <h1 className="category-title">The Walking Dad Blue</h1>
          <Link
            to="/men/shirts/menShirtWalkingdad"
            className="category-img-btn"
          >
            Shop Now
          </Link>
        </div>
        <div className="mt-3 cat-img men-item-5">
          <h1 className="category-title">
            New Stylish Slim Formal Plaid Shirt
          </h1>
          <Link to="/men/shirts/menShirtUST6283" className="category-img-btn">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenCategory;
