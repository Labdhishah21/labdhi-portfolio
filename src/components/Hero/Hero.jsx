import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const heroImageUrl = getImageUrl("hero/heroImage.png");
  console.log("Hero Image URL:", heroImageUrl); // Log the URL to check it

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Labdhi</h1>
        <p className={styles.description}>
          I am currently studying at VJTI in TY B.Tech IT. I have developed multiple web development projects and am passionate about building dynamic and user-friendly web applications.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImageUrl}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
