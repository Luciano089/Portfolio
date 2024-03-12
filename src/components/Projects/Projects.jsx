import React from "react";
import projects from "../../data/projects";
import styles from "../Projects/Projects.module.css";
import projectImage from "../../assets/projects/imgcodigo.avif";


export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2>Projetos</h2>
      <div className={styles.projectsList} id="projects">
        <ul>
          {projects.map((project, index) => (
            <li key={index} className={styles.projects}>
              <h2 className={styles.title}>{project.title}</h2>
              <img className={styles.img} src={projectImage} alt={project.title}/>
              <p>{project.description}</p>
              <h3>Tecnologias Utilizadas:</h3>
              <ul className={styles.techsContainer}>
                {project.techs.map((tech, index) => (
                  <li className={styles.techs} key={index}>
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
