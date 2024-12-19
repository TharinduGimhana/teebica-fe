"use client";

import Image from "next/image";
import { Row, Col, Button, Card } from "antd";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const { Meta } = Card;

  const cardData = [
    {
      id: 1,
      title: "ISOMANGIFERIN",
      description:
        "is a natural compound belonging to the class of xanthones. It is similar in structure to mangiferin, another xanthone found in mangoes and other plants. Isomangiferin is found in various plants such as Annona squamosa, Garcinia mangostana, and Salacia chinensis.",
      image: "/images/circle1.jpg",
    },
    {
      id: 2,
      title: "ISOMANGIFERIN",
      description:
        "is a natural compound belonging to the class of xanthones. It is similar in structure to mangiferin, another xanthone found in mangoes and other plants. Isomangiferin is found in various plants such as Annona squamosa, Garcinia mangostana, and Salacia chinensis.",
      image: "/images/circle2.jpg",
    },
    {
      id: 3,
      title: "ISOMANGIFERIN",
      description:
        "is a natural compound belonging to the class of xanthones. It is similar in structure to mangiferin, another xanthone found in mangoes and other plants. Isomangiferin is found in various plants such as Annona squamosa, Garcinia mangostana, and Salacia chinensis.",
      image: "/images/circle3.jpg",
    },
    {
      id: 4,
      title: "ISOMANGIFERIN",
      description:
        "is a natural compound belonging to the class of xanthones. It is similar in structure to mangiferin, another xanthone found in mangoes and other plants. Isomangiferin is found in various plants such as Annona squamosa, Garcinia mangostana, and Salacia chinensis.",
      image: "/images/circle4.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col xs={24} md={12} className={styles.leftColumn}>
          <h1 className={styles.header}>Teebica</h1>
          <h2 className={styles.subHeader}>Experience The Taste Of Arabica</h2>
          <p className={styles.paragraph}>
            Are you familiar with Teebica? It's a unique product made from
            sun-dried leaves of Coffea Arabica Typica plant that have undergone
            an enzymeenhanced fermentation process. We chose the name Teebica to
            reflect our focus on harvesting coffee leaves mainly of the variety
            typica.
          </p>
          <div className={styles.buttonGroup}>
            <Button type="primary" className={styles.readMoreButton}>
              READ MORE
            </Button>
            <Button type="default" className={styles.orderNowButton}>
              ORDER NOW
            </Button>
          </div>
        </Col>

        <Col xs={24} md={12} className={styles.rightColumn}>
          <div className={styles.imageOverlay}></div>
        </Col>
      </Row>

      <Row className={styles.fadeRow} gutter={[16, 16]} justify="center">
        {cardData.map((card) => (
          <Col key={card.id} xs={24} sm={12} md={12} lg={6}>
            <div className={styles.cardContainer}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                initial={{ x: "-10vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className={styles.card}
                  bordered={false}
                  cover={
                    <div className={styles.cardImageWrapper}>
                      <Image
                        alt={card.title}
                        src={card.image}
                        width={100}
                        height={100}
                        className={styles.cardImage}
                        style={{
                          borderRadius: "50%",
                          border: "3px solid white",
                        }}
                      />
                    </div>
                  }
                >
                  <Meta
                    title={<h3 className={styles.cardTitle}>{card.title}</h3>}
                    description={
                      <p className={styles.cardDescription}>{card.description}</p>
                    }
                    className={styles.cardMeta}
                  />
                </Card>
              </motion.div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
