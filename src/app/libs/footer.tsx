"use client";

import styles from "../ui/footer.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer className={`${styles.frame} ${roboto.className}`}>
      <div className={styles.circle}></div>
      <div className={styles.content}>
        <ul>
          <li>
            <a href="">Allgemeine Informationen</a>
          </li>
          <li>
            <a href="">Impressum</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
