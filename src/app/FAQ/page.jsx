"use client";

import { Row, Col } from "antd";
import styles from "./page.module.css";

const image = "/images/Object.png";
const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>FAQ</h1>

      <Row className={styles.row} gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <img src={image} alt={""} className={styles.image} />
          <h2 className={styles.subheader}>
            Got questions! We've got answers.
          </h2>
        </Col>
      </Row>

      <Row className={styles.qarow} gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <p className={styles.question}>How to get benefits for tabeeca?</p>
          <p className={styles.answer}>
            Find out more about being a Tabeeca product and apply online career
            section.
          </p>

          <p className={styles.question}>How to get benefits for tabeeca?</p>
          <p className={styles.answer}>
            Find out more about being a Tabeeca product and apply online career
            section.
          </p>

          <p className={styles.question}>How to get benefits for tabeeca?</p>
          <p className={styles.answer}>
            Find out more about being a Tabeeca product and apply online career
            section.
          </p>

          <p className={styles.question}>How to get benefits for tabeeca?</p>
          <p className={styles.answer}>
            Find out more about being a Tabeeca product and apply online career
            section.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default page;
