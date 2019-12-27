import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer container-fluid text-center">
      <div className="row w-100">
        <div className="col-12 col-md mb-5">
          <div className="d-flex flex-column align-items-center font-small">
            <p className="lead">Customer Service</p>
            <p>Help & FAQs</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="col-12 col-md mb-5">
          <div className="d-flex flex-column align-items-center font-small">
            <p className="lead .footer-title">Our Stores</p>
            <p>Find A Store</p>
            <p>Visitor Servies</p>
            <p>Tell Us Your Opinion</p>
            <p>Behind the Scenes</p>
            <p>Apply For Job</p>
          </div>
        </div>
        <div className="col-12 col-md mb-5">
          <div className="d-flex flex-column align-items-center font-small">
            <p className="lead">Appear Inc</p>
            <p>Corporate Site</p>
            <p>About Appear</p>
            <p>Press Room</p>
            <p>Green Living</p>
            <p>Appear Gives</p>
          </div>
        </div>
        <div className="col-12 col-md">
          <h5 className="online-socials">Socials</h5>
          <div className="d flex flex-sm-column mt-3">
            <i className="fab fa-facebook-f text-white social-links"></i>
            <i className="fab fa-twitter-square text-white social-links"></i>
            <i className="fab fa-instagram text-white social-links"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
