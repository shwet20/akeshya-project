import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="/">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                className="img-fluid"
                width={70}
                height={100}
              />
              AKESHYA
            </a>
          </h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="getstarted scrollto text-decoration-none" href="#contact">
                Contact us
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
