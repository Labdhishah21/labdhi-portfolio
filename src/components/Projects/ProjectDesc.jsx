import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json"; // Adjusted path for projects data
import styles from "./ProjectDesc.module.css"; // Import CSS module

function ProjectDesc() {
  const { slug } = useParams(); // Get slug from URL
  const project = projects.find((p) => p.slug === slug); // Find the project

  if (!project) return <h2 className={styles.notFound}>Project not found!</h2>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      {/* <img className={styles.image} src={project.imageSrc} alt={project.title} /> */}
      <p className={styles.description}>{project.description}</p>
      <h3 className={styles.skillsTitle}>Skills Used:</h3>
      <ul className={styles.skills}>
        {project.skills.map((skill, index) => (
          <li key={index} className={styles.skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDesc;
