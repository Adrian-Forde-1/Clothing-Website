import React from "react";
import { Link } from "react-router-dom";

const AnnouncementTag = () => {
  return (
    <div className="announcement-tag">
      <span>50% Off All Jackets | Black Friday Sale</span>
      <ul className="ml-auto">
        <li>
          <div className="navigation-icons mx-3">
            <Link to="/" className="mx-0 mx-lg-2">
              <i className="far fa-user"></i>
            </Link>
          </div>
        </li>

        <li>
          <div className="navigation-icons mx-3">
            <Link to="/favorites" className="mx-0 mx-lg-2">
              <i className="fas fa-heart"></i>
            </Link>
          </div>
        </li>

        <li>
          <div className="navigation-icons mx-3">
            <Link to="/cart" className="mx-0 mx-lg-2">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AnnouncementTag;
