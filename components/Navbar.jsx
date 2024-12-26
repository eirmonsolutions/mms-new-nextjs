"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle dropdown toggle for mobile
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="navbar-main">
        <nav className="navbar-expand-lg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-3">
                <div className="logo-area">
                  <Link className="navbar-brand" href="/">
                    <img src="/assets/images/logo.png" alt="Logo" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <CgMenuRightAlt />
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about">
                        About
                      </Link>
                    </li>

                    <li
                      className="nav-item"

                    >
                      <Link
                        className="nav-link" onClick={toggleDropdown}
                        href="#"
                      >
                        Menu <span className="navbar-dropdown-icon"><FaAngleDown /></span>
                      </Link>
                      <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                        <li>
                          <Link className="dropdown-item" href="/liquor">
                            Liquor
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/beer">
                            Beer
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/wine">
                            Wine
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="navbar-btn-area d-none d-lg-block">
                  <Link className="theme-btn" href="tel:5177692470">
                    Call 517-769-2470
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>


    </>
  );
};

export default Navbar;
