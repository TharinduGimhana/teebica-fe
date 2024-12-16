"use client";

import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import styles from "./page.module.css";

const image = "/images/aboutus.jpg";
const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About</h1>

      <Row className={styles.row} gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <img src={image} alt={""} className={styles.image} />
        </Col>
      </Row>

      <Row className={styles.qarow} gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <p className={styles.paragraph}>
            Are you familiar with Teebica? It's a unique product made from
            sun-dried leaves of Coffea Arabica Typica plant that have undergone
            an enzymeenhanced fermentation process. We chose the name Teebica to
            re- flect our focus on harvesting coffee leaves mainly of the
            variety typica. The Teebica process was invented by Georg Raudaschl,
            who has been in the coffee industry since 2003. He started by
            producing fluid-bed shop roasters called Roastmaxtor and later
            ventured into running cafes and farming Arabica coffee, primarily
            typica and bourbon varieties. By using Teebica, you can enjoy a new
            coffee experience that is sustainable, healthy, and delicious.
          </p>

          <p className={styles.paragraph}>
            At Teebica, we're committed to providing you with a high-quality
            product that not only tastes great but is also good for your health.
            By using only the finest Arabica coffee leaves and incorporating
            cutting-edge re- search, we've created a beverage that's both
            delicious and nutritious. We take great pride in our commitment to
            sustainability and social responsibility. We work exclusively with
            hill-tribe people from different ethnic minorities, who face
            significant challenges in their daily lives. Typically, they have
            only one coffee cherry harvest per year, which makes it challenging
            to support them- selves and their families.
          </p>

          <p className={styles.paragraph}>
            With the introduction of Teebica production, we've been able to help
            hilltribe communities increase their coffee leaf harvests to up to
            five times a year using the same plants. By purchasing their leaves,
            we provide a reliable source of income that supports the local
            economy and ensures that these communities have a sustainable
            future.
          </p>

          <p className={styles.paragraph}>
            At Teebica, we believe that sustainability and social responsibility
            are essential values that we must uphold. By supporting hill-tribe
            communities and promoting eco-friendly practices, we can make a
            positive impact on the world while producing high-quality coffee
            leaf infusions that everyone can enjoy. To fully reap the health
            benefits and extract maximum nutrients, it is essential to use water
            at boiling temperature.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default page;
