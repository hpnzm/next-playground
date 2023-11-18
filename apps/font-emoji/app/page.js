import styles from "./page.module.css";

export default () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__text"]}>
        <h1 className={styles["hero__text--heading"]}>
          Next.js 14 <span className="emoji">🎏</span>
        </h1>
        <h2 className={styles["hero__text--description"]}>
          The React Framework for the Web
        </h2>
      </div>
    </section>
  );
};
