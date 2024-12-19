"use client";

import React, { useState, useEffect, useRef } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = ({ isScrolled: parentIsScrolled }) => {
  const [activeKey, setActiveKey] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    setMenuOpen(false);
  };

  useEffect(() => {
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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div
      className={`${styles.navbar} ${parentIsScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.logo}>
        <Link href="/" onClick={() => setActiveKey("/")}>
          <h1>Teebica</h1>
        </Link>
      </div>

      <button
        className={styles.hamburgerMenu}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>

      <div
        ref={menuRef}
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
