import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-3 mt-auto">
      <div className="container text-center">
        <span className="text-muted">
          Made with ❤️ &copy;Duggineni Tharun kumar{" "}
          <a href="https://github.com/Tharunkumar65">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/duggineni-tharun-kumar-871234258">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
