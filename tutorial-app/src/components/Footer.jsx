import React from "react";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.container}>
      <p>
        &copy; 2024 Copyright by laptrinhfullstack
        <ul>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Policy</a>
          </li>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
