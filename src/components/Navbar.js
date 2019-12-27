import React, { useEffect } from "react";
import MenDropdown from "./dropdowns/MenDropdown";
import WomenDropdown from "./dropdowns/WomenDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navigation-links");
    const navLinks = document.querySelectorAll(".navigation-links li");

    //Toggle Mav
    burger.addEventListener("click", () => {
      nav.classList.toggle("navigation-active");

      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navigationLinkFade 400ms ease forwards ${index /
            7 +
            0.4}s`;
        }
      });

      //Burger Animation
      burger.classList.toggle("toggle");
    });
  };

  useEffect(() => {
    navSlide();
  }, []);
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/">
          <h4>Appear</h4>
        </Link>
      </div>
      <ul className="navigation-links">
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/sale">Sale</Link>
        </li>
      </ul>

      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
