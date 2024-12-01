"use client";

import { signInWithGoogle } from "../libs/firebase/auth";
import { Roboto } from "next/font/google";
import styles from "../ui/login.module.css";
import Image from "next/image";
import kleiderschrankIcon from "../ui/images/closet-svgrepo-com.svg";
import googleIcon from "../ui/images/google-color-svgrepo-com.svg";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("Logged in user:", user);
    } catch (error) {
      console.error("Sign-In error:", error);
    }
  };

  return (
    <main className={`${roboto.className} ${styles.main}`}>
      <div className={styles.background}></div>
      <div className={styles.circle}></div>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            priority
            src={kleiderschrankIcon}
            alt="App logo"
            className={styles.logo}
          ></Image>
        </div>
        <h1 className={styles.header}>Logge dich ein</h1>
        <h2>und organisiere deinen Kleiderschrank</h2>
        <div className={styles.buttonContainer}>
          <button onClick={handleGoogleSignIn} className={styles.signInButton}>
            {" "}
            <Image
              priority
              src={googleIcon}
              alt="Google Logo"
              className={styles.googleLogo}
            ></Image>
            Anmelden mit Google
          </button>
        </div>
      </div>
      {/* <button onClick={handleLogOut}>Log Out</button> */}
    </main>
  );
}