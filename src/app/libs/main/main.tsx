"use client";

import { Roboto } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import styles from "../../ui/main.module.css";
import statisticsIcon from "../../ui/images/statistics.svg";
import clothingIcon from "../../ui/images/clothing-hanger.svg";
import collectionIcon from "../../ui/images/collection.svg";
import Loading from "../loading";
import AddButton from "./addButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

type MainProps = {
  isClothing: boolean;
};

const Main: React.FC<MainProps> = ({ isClothing }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inEdit, setInEdit] = useState(false);

  return (
    <main className={`${styles.main} ${roboto.className}`}>
      <header className={styles.header}>
        <a href="/profile">
          <div className={styles.iconBox}>
            <Image
              priority
              src={statisticsIcon}
              alt="go to statistics"
              className={styles.icon}
            ></Image>
          </div>
        </a>

        {isClothing && (
          <a href="/outfits">
            <div className={styles.iconBox}>
              <Image
                priority
                src={clothingIcon}
                alt="go to statistics"
                className={styles.icon}
              ></Image>
            </div>
          </a>
        )}
        {!isClothing && (
          <a href="/kleiderschrank">
            {" "}
            <div className={styles.iconBox}>
              <Image
                priority
                src={collectionIcon}
                alt="go to statistics"
                className={styles.icon}
              ></Image>
            </div>
          </a>
        )}
      </header>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <AddButton isClothing={isClothing}></AddButton>
        </div>
      )}
    </main>
  );
};

export default Main;

// header - pb (static) & symbol zum switch der Seite (braucht param)
// pb leitet auf die statistic weiter
// div - anezigen der Elemente (braucht param)
// div - anzeigen der Details (braucht dann den inhalt und den param)
// die Seite hat einen button

// loading symbol, wenn die elemente gerade aus dem backend gezogen werden
