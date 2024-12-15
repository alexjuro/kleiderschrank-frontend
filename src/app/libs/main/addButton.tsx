import styles from "../../ui/addButton.module.css";
import plusIcon from "../../ui/images/plus.svg";
import Image from "next/image";

type ButtonProps = {
  isClothing: boolean;
};

const AddButton: React.FC<ButtonProps> = ({ isClothing }) => {
  return (
    <div>
      {isClothing && (
        <div className={styles.add}>
          <a href="/add">
            <Image
              priority
              src={plusIcon}
              alt="add a clothing"
              className={styles.plusLogo}
            ></Image>
          </a>
        </div>
      )}
      {!isClothing && (
        <div className={styles.add}>
          <a href="/add">
            <Image
              priority
              src={plusIcon}
              alt="add an outfit"
              className={styles.plusLogo}
            ></Image>
          </a>
        </div>
      )}
    </div>
  );
};

export default AddButton;
