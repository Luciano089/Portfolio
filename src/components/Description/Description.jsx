import React from "react";
import styles from "../Description/Description.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Description = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Luciano</h1>
        <p className={styles.description}>
          Olá, meu nome é Luciano, tenho 19 anos e sou estudante do curso de
          ciência da computação na Universidade Salvador, sou um desenvolvedor Apaixonado por
          tecnologia e estou em busca do meu primeiro emprego como desenvolvedor
          web atuando no front-end ou Back-end
        </p>

        <div className={styles.containerButtons}>
          <a
            href="mailto:lucianosena21335@gmail.com"
            className={styles.contactBtn}
          >
            Contato
          </a>

          <a
            href="mailto:lucianosena21335@gmail.com"
            className={styles.contactBtn}
          >
            Baixe Meu Curriculo
          </a>
          <div className={styles.socialNetworks}>
            <a href="https://github.com/Luciano089" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                fontSize={50}
                color="white"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/luciano-sena-a79b24219/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} color="white" fontSize={50} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBlur}></div>
      <div className={styles.topBlur}></div>
    </section>
  );
};
