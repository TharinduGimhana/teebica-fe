"use client";

import React from "react";
import { Row, Col, Pagination } from "antd";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Scientific Research</h1>
      <Row className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className={styles.paragraph}>
            <h2 className={styles.paragraphTitle}>
              <em>References</em>
            </h2>
            <hr />
            <p className={styles.paragraphBody}>
              Segheto, L., Santos, B. C. S., Werneck, A. F. L., Vilela, F. M.
              P., de Sousa, O. V., & Rodarte, M. P. (2018). Antioxi- dant
              extracts of coffee leaves and its active ingredient
              5-caffeoylquinic acid reduce chemically-induced inflammation in
              mice. Industrial Crops and Products, 126, 48-57.
            </p>
            <br></br>
            <br></br>
            <p className={styles.paragraphBody}>
              Trevisan, M. T., Farias de Almeida, R., Soto, G., De Melo Virginio
              Filho, E., Ulrich, C. M., & Owen, R. W. (2016). Quantitation by
              HPLC-UV of mangiferin and isomangiferin in coffee (Coffea arabica)
              leaves from Brazil and Costa Rica after solvent extraction and
              infusion. Food Analytical Methods, 9(9), 2649-2655. Patil, S.,
              Vedashree, M., & Murthy, P. S. (2022). Valorization of coffee
              leaves as a potential agri-food re- source: bio-active compounds,
              applications and future prospective. Planta, 255(3), 1-17.
            </p>
          </div>
        </Col>
      </Row>

      <Row className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className={styles.paragraphTwo}>
            <h2 className={styles.paragraphTitle}>
              <em>Theobromine:</em>
            </h2>
            <hr />
            <a
              href="https://www.researchgate.net/profile/HiroshiAshihara/publica-tion/11163963_Biosynthesis_of_Caffeine_in_Leaves_of_Coffee/links/09e41510056703synthesis-of-Caffeine-in-Leaves-of-Coffee.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.researchgate.net/profile/HiroshiAshihara/publica-
              tion/11163963_Biosynthesis_of_Caffeine_in_Leaves_of_Coffee/links/09e41510056703
              synthesis-of-Caffeine-in-Leaves-of-Coffee.pdf
            </a>
            <p className={styles.paragraphBody}>
              mangiferin, isomangiferin, epicatechin, procyanidin B1 chlorogenic
              acid (4 isomers), isorhamnetin gluco- side, rutin glucoside,
              quercetin glucoside, and a rutin isomer.
            </p>
            <a
              href="https://www.researchgate.net/profile/Maria-Trevisan3/publica-tion/281450382_Content_and_Solvent_Extraction_in_Coffee_Leaves_from_Brazil/links/55e84 6e708ae65b638997818/Content-and-Solvent-Extraction-in-Coffee-Leaves-from-Brazil.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.researchgate.net/profile/Maria-Trevisan3/publica-
              tion/281450382_Content_and_Solvent_Extraction_in_Coffee_Leaves_from_Brazil/links/55e84
              6e708ae65b638997818/Content-and-Solvent-Extraction-in-Coffee-Leaves-from-Brazil.pdf
            </a>
          </div>
        </Col>
      </Row>

      <Row className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className={styles.linkRow}>
            <h2 className={styles.paragraphTitle}>
              <em>Anti inflammatory:</em>
            </h2>
            <hr />
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5414237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5414237/
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/30236674/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubmed.ncbi.nlm.nih.gov/30236674/
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/29407917/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubmed.ncbi.nlm.nih.gov/29407917/
            </a>
            <a
              href="https://ifst.onlinelibrary.wiley.com/doi/abs/10.1111/ijfs.14099"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ifst.onlinelibrary.wiley.com/doi/abs/10.1111/ijfs.14099
            </a>
            <a
              href="https://pubs.rsc.org/en/content/articlelanding/2016/ra/c6ra06328d#!divAbstract"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubs.rsc.org/en/content/articlelanding/2016/ra/c6ra06328d#!divAbstract
            </a>
            <a
              href="http://www.ncbi.nlm.nih.gov/pubmed/22032148"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.ncbi.nlm.nih.gov/pubmed/22032148
            </a>
            <a
              href="http://www.ncbi.nlm.nih.gov/pubmed/20933071"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.ncbi.nlm.nih.gov/pubmed/20933071
            </a>
            <a
              href="https://www.spandidos-publications.com/10.3892/mmr.2017.6698"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.spandidos-publications.com/10.3892/mmr.2017.6698
            </a>
          </div>
        </Col>
      </Row>

      <Row className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className={styles.linkRowTwo}>
            <h2 className={styles.paragraphTitle}>
              <em>Blood:</em>
            </h2>
            <hr />
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5414237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5414237/
            </a>
            <a
              href="http://www.ncbi.nlm.nih.gov/pubmed/16820341"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.ncbi.nlm.nih.gov/pubmed/16820341
            </a>
          </div>
        </Col>
      </Row>

      <Row className={styles.row}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className={styles.linkRowThree}>
            <h2 className={styles.paragraphTitle}>
              <em>Diabetes:</em>
            </h2>
            <hr />
            <a
              href="http://www.researchgate.net/publication/7992802_Effect_of_man-giferin_on_hyperglycemia_and_atherogenicity_in_STZ_diabetic_rats"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.researchgate.net/publication/7992802_Effect_of_man-
              giferin_on_hyperglycemia_and_atherogenicity_in_STZ_diabetic_rats
            </a>
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5357792/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5357792/
            </a>
            <a
              href="https://www.spandidos-publications.com/10.3892/ijmm.2018.3524"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.spandidos-publications.com/10.3892/ijmm.2018.3524
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default page;
