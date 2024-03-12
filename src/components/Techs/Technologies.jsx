import React from "react";
import styles from "./technologies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faJs, faNode,  } from "@fortawesome/free-brands-svg-icons";
import { SiExpress, SiMysql} from "react-icons/si"


export const Technologies = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title} id="techs">Técnologias</h1>
      <div className={styles.content}>
      <FontAwesomeIcon icon={faHtml5} style={{color: "#ff6600"}} className={styles.techItems} />
      <FontAwesomeIcon icon={faCss3} style={{color: "blue",}} className={styles.techItems} />
      <FontAwesomeIcon icon={faJs} style={{color: "yellow",}} className={styles.techItems} />
      <FontAwesomeIcon icon={faReact} style={{color: "#74C0FC",}} className={styles.techItems} />
      <FontAwesomeIcon icon={faNode} style={{color: "#63e6be",}} className={styles.techItems} />
      <SiExpress className={styles.techItems} color="white"/>
      <SiMysql className={styles.techItems} color="aqua"/>
        
      </div>
    </section>
  );
};
