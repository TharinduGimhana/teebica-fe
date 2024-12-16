"use client";

import React, { useState, useEffect } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [activeKey, setActiveKey] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/Health-benefits", label: "Health Benefits" },
    { key: "/Scientific-research", label: "Scientific Research" },
    { key: "/FAQ", label: "FAQ" },
    { key: "/About", label: "About" },
    { key: "/Contact", label: "Contact" },
  ];

  const handleClick = (key) => {
    setActiveKey(key);
    setMenuOpen(false); // Close menu after selecting an item
  };

  useEffect(() => {
    // Track active route for highlighting
    const handleRouteChange = () => {
      setActiveKey(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    // Handle scroll-based navbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.logo}>
        <Link href="/" onClick={() => setActiveKey("/")}>
          <h1>Teebica</h1>
        </Link>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className={styles.hamburgerMenu}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>

      {/* Navigation Menu */}
      <div
        className={`${styles.menuContainer} ${
          menuOpen ? styles.menuOpen : styles.menuClosed
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href={item.key}
            onClick={() => handleClick(item.key)}
            className={`${styles.menuItem} ${
              activeKey === item.key ? styles.menuItemActive : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
