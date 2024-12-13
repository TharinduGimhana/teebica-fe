// components/Navbar.jsx
"use client";

import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/navbar.module.css";  // Import the CSS module

const Navbar = () => {
  const [activeKey, setActiveKey] = useState("/");
  const [open, setOpen] = useState(false);

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
    if (open) setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className={styles.navbar}>
      {/* Left Side: Logo */}
      <div className={styles.logo}>
        <h1>Teebica</h1>
      </div>

      {/* Right Side: Menu */}
      <div className={styles.menuContainer}>
        {menuItems.map((item) => (
          <Link
            key={item.key}
            href={item.key}
            onClick={() => handleClick(item.key)}
            className={`${styles.menuItem} ${activeKey === item.key ? styles.menuItemActive : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <Button
        className={styles.hamburgerMenu}
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={closeDrawer}
        open={open} // Updated to `open` prop
        width={250}
      >
        <Menu
          mode="inline"
          selectedKeys={[activeKey]}
          onClick={({ key }) => handleClick(key)}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
