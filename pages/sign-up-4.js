import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button";
import styles from "@styles/SignUp.module.css";

const SignUp3 = () => {
  const [formData, setFormData] = useState({});
  const [selectedType, setSelectedType] = useState();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleClick() {
    console.log("I was cleared");
  }

  function handleSelectedType(event) {
    const type = event.target.value;
    setSelectedType(type);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <Image
            src="/logo-green.png"
            alt="Kococare Logo"
            width={32}
            height={31.2}
          />
        </header>
        <div className={styles["personality-grid"]}>
          <div className={styles["personality-div"]}>
            <p>Best Friend</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Faithful</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Lazy</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Hyper Active</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Cuddle bug</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Photogenic</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Goofy</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Naughty</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Best Friend</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Faithful</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Lazy</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Hyper Active</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Cuddle bug</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Photogenic</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Goofy</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Naughty</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Best Friend</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Faithful</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Lazy</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Hyper Active</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Cuddle bug</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Photogenic</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Goofy</p>
          </div>
          <div className={styles["personality-div"]}>
            <p>Naughty</p>
          </div>
        </div>
      </div>
      <div className={styles["bottom-text"]}>
        <div className={styles.back}>
          <Link href="/sign-up">
            <Image
              src="/ArrowRight.png"
              alt="Right Arrow"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <Button className>
          <Link href="/setup">Next</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUp3;
