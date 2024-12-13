"use client";

import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

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

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" onClick={() => setActiveKey("/")}>
          <h1>Teebica</h1>
        </Link>
      </div>

      <div className={styles.menuContainer}>
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

      <Button
        className={styles.hamburgerMenu}
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />

      <Drawer
        placement="right"
        closable={false}
        onClose={closeDrawer}
        open={open}
        width={250}
      >
        <Menu
          mode="inline"
          selectedKeys={[activeKey]}
          onClick={({ key }) => handleClick(key)}
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              className={activeKey === item.key ? styles.menuItemActive : ""}
            >
              <Link href={item.key} className={styles.menuItem}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
