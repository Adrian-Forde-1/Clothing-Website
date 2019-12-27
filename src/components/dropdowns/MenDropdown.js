import React from "react";
import { Link } from "react-router-dom";

const MenDropdown = () => {
  return (
    <div className="grid-container men-dropdown">
      <div className="grid-item text-left mt-3 item-1">
        <h6 className="mb-3">New Arrivals</h6>
        <Link className="dropdown-item" to="/">
          Clothing
        </Link>
        <Link className="dropdown-item" to="/">
          Shoes
        </Link>
      </div>

      <div className="grid-item text-left mt-3 item-2">
        <h6 className="mb-3">Offers</h6>
        <Link className="dropdown-item" to="/">
          Clothing
        </Link>
        <Link className="dropdown-item" to="/">
          Shoes
        </Link>
      </div>

      <div className="grid-item text-left mt-3 item-3">
        <h6 className="mb-3">Shop By Product</h6>
        <Link className="dropdown-item" to="/">
          View All
        </Link>
        <Link className="dropdown-item" to="/men/shirts">
          Shirts
        </Link>
        <Link className="dropdown-item" to="/men/jeans">
          Jeans
        </Link>
        <Link className="dropdown-item" to="/men/shoes">
          Shoes
        </Link>
      </div>
    </div>
  );
};

export default MenDropdown;
