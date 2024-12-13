"use client";

import React, { useState } from "react";
import { Menu } from "antd";
import Link from "next/link";

const Navbar = () => {
  const [activeKey, setActiveKey] = useState("/");

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
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
      }}
    >
      {/* Left Side: Logo */}
      <div style={{ fontSize: "20px", fontWeight: "bold", fontFamily: "Georgia, serif" }}>
        <h1>Teebica</h1>
      </div>

      {/* Right Side: Menu */}
      <div
        style={{
          display: "flex",
          gap: "10px", // Space between menu items
        }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href={item.key}
            onClick={() => handleClick(item.key)}
            style={{
              textDecoration: "none",
              color: "#000000",
              padding: "7px 10px",
              borderRadius: "10px",
              backgroundColor:
                activeKey === item.key ? "#d3d3d3" : "transparent", // Highlight active link
              transition: "background-color 0.3s ease",
              fontFamily: "Poppins, sans-serif", // Apply Poppins Medium font to the menu items
              fontSize: "22px"
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
