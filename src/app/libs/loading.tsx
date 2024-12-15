import styles from "../ui/loading.module.css";

const Loading = () => {
  return (
    <main className={styles.container}>
      <div className={styles.loadingCirlce}></div>
    </main>
  );
};
export default Loading;
