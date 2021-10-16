import Image from "next/image";
import styles from "@styles/Setup.module.css";

const Setup = () => {
  return (
    <div className={styles.container}>
      <div className={styles["company-name"]}>
        <p className={styles.welcome}>Welcome</p>
        <p className={styles.title}>care</p>
      </div>
      <div className={styles["company-slogan"]}>
        <Image
          src="/big-logo.png"
          alt="Kococare Logo"
          width={121}
          height={113}
        />
        <p className={styles.subtitle}>care for your pet</p>
      </div>
    </div>
  );
};

export default Setup;
