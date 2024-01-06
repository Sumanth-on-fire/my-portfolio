import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.img} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sumanthtech2k@gmail.com">sumanthtech2k@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img 
            className={styles.img}
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sumanth-uppalapati-63947117a/">linkedin.com/sumanth-uppalapati</a>
        </li>
        <li className={styles.link}>
          <img className={styles.img} src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Sumanth-on-fire">github.com/sumanth-on-fire</a>
        </li>
      </ul>
    </footer>
  );
};
