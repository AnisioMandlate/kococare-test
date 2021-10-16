import { useState } from "react";
import Image from "next/image";
import styles from "@styles/Verification.module.css";

const OTP = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className={styles.container}>
      <div>
        <header>
          <Image src="/logo.png" alt="Kococare Logo" width={32} height={31.2} />
        </header>

        <h1 className={styles.title}>
          Hello <br /> Parent!
        </h1>
        <p className={styles.text}>
          Thank you for choosing care. It’s super awesome to have you here.
          Let’s start your parenting journey.
        </p>
        <h2 className={styles.subtitle}>
          Let’s set up your account.
          <br />
          You can do so with your phone number.
        </h2>
      </div>
      <button className={styles.button}>Send OTP to verify</button>
    </div>
  );
};

export default OTP;
