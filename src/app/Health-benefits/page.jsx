"use client";

import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import styles from "./page.module.css";
const data = [
  {
    id: 1,
    image: "/images/Rectangle2.jpg",
    title: "TEEBICA HEALTH BENEFITS",
    description:
      "Coffee leaves have been used as a daily drink for centuries, particularly in Indonesia, especially in West Sumatra, by the Mi- nangkabau community. Its known as Kopi Kawa Daun, where people consume coffee leaf infusions for their numerous health benefits. In these regions, it's believed that coffee leaves can relieve symptoms of colds and asthma, and farmers used to trade them for use in ethno medicines with high antioxidant properties.",
  },
  {
    id: 2,
    image: "/images/Rectangle2.jpg",
    title: "TEEBICA HEALTH BENEFITS",
    description:
      "Coffee leaves have been used as a daily drink for centuries, particularly in Indonesia, especially in West Sumatra, by the Mi- nangkabau community. Its known as Kopi Kawa Daun, where people consume coffee leaf infusions for their numerous health benefits. In these regions, it's believed that coffee leaves can relieve symptoms of colds and asthma, and farmers used to trade them for use in ethno medicines with high antioxidant properties.",
  },
  {
    id: 3,
    image: "/images/Rectangle2.jpg",
    title: "TEEBICA HEALTH BENEFITS",
    description:
      "Coffee leaves have been used as a daily drink for centuries, particularly in Indonesia, especially in West Sumatra, by the Mi- nangkabau community. Its known as Kopi Kawa Daun, where people consume coffee leaf infusions for their numerous health benefits. In these regions, it's believed that coffee leaves can relieve symptoms of colds and asthma, and farmers used to trade them for use in ethno medicines with high antioxidant properties.",
  },
  {
    id: 4,
    image: "/images/Rectangle2.jpg",
    title: "TEEBICA HEALTH BENEFITS",
    description:
      "Coffee leaves have been used as a daily drink for centuries, particularly in Indonesia, especially in West Sumatra, by the Mi- nangkabau community. Its known as Kopi Kawa Daun, where people consume coffee leaf infusions for their numerous health benefits. In these regions, it's believed that coffee leaves can relieve symptoms of colds and asthma, and farmers used to trade them for use in ethno medicines with high antioxidant properties.",
  },
  {
    id: 5,
    image: "/images/Rectangle2.jpg",
    title: "TEEBICA HEALTH BENEFITS",
    description:
      "Coffee leaves have been used as a daily drink for centuries, particularly in Indonesia, especially in West Sumatra, by the Mi- nangkabau community. Its known as Kopi Kawa Daun, where people consume coffee leaf infusions for their numerous health benefits. In these regions, it's believed that coffee leaves can relieve symptoms of colds and asthma, and farmers used to trade them for use in ethno medicines with high antioxidant properties.",
  },
  {
    id: 6,
    image: "/images/Rectangle2.jpg",
    title: "TEEBICA HEALTH BENEFITS",
    description:
      "Coffee leaves have been used as a daily drink for centuries, particularly in Indonesia, especially in West Sumatra, by the Mi- nangkabau community. Its known as Kopi Kawa Daun, where people consume coffee leaf infusions for their numerous health benefits. In these regions, it's believed that coffee leaves can relieve symptoms of colds and asthma, and farmers used to trade them for use in ethno medicines with high antioxidant properties.",
  },
  {
    id: 7,
    image: "/images/Rectangle2.jpg",
    title: "TEEBICA HEALTH BENEFITS",
    description:
      "Coffee leaves have been used as a daily drink for centuries, particularly in Indonesia, especially in West Sumatra, by the Mi- nangkabau community. Its known as Kopi Kawa Daun, where people consume coffee leaf infusions for their numerous health benefits. In these regions, it's believed that coffee leaves can relieve symptoms of colds and asthma, and farmers used to trade them for use in ethno medicines with high antioxidant properties.",
  },
];

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Health Benefits</h1>
      {currentItems.map((item) => (
        <Row key={item.id} className={styles.row} gutter={[16, 16]}>
          <Col lg={10} className={styles.imageColumn}>
            <img src={item.image} alt={item.title} className={styles.image} />
          </Col>
          <Col lg={14} className={styles.descriptionColumn}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href={`/details/${item.id}`} className={styles.readMore}>
              Read More
            </a>
          </Col>
        </Row>
      ))}
      <Pagination
        current={currentPage}
        total={data.length}
        pageSize={itemsPerPage}
        onChange={handleChange}
        className={styles.pagination}
      />
    </div>
  );
};

export default page;
