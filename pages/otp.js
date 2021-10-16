import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import styles from "@styles/Verification.module.css";
import Button from "@components/Button";

const OTP = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <Image src="/logo.png" alt="Kococare Logo" width={32} height={31.2} />
        </header>

        <h2 className={styles.title}>Verify your phone no.</h2>
        <p className={styles.text}>Please enter the OTP you recieved</p>
        <p className={styles.["re-send"]}>
          <span>
            <Link href="/">Re-send </Link>
          </span>
          OTP in 0:10 secs
        </p>
      </div>
     <Button>
       Send OTP to verify
     </Button>
    </div>
  );
};

export default OTP;
