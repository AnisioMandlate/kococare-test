import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"
import OTPInput from "react-otp-input"
import Button from "@components/Button";
import styles from "@styles/Verification.module.css";


const OTP = () => {
    const [otp, setOtp] = useState("");
 
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <Image src="/logo.png" alt="Kococare Logo" width={32} height={31.2} />
        </header>

        <h2 className={styles.title}>Verify your phone no.</h2>
        <OTPInput
        value={otp}
        onChange={(otp) => setOtp(otp)}
        numInputs={6}
        containerStyle={styles.["input-container"]}
        inputStyle={styles.input}
         />
        <p className={styles.text}>Please enter the OTP you recieved</p>
        <p className={styles.["re-send"]}>
          <span>
            <Link href="/">Re-send </Link>
          </span>
          OTP in 00:10 secs
        </p>
      </div>
      <div className={styles.["bottom-text"]}>
         <p className={styles.backlink}>
          <span>
            <Link href="/">Go Back </Link>
          </span>
          and update your Phone No.
        </p>

        { otp ? 
        <Button>
          <Link href="/otp">Send OTP to verify</Link>
        </Button> : null 
        }

        
      </div>
    </div>
  );
};

export default OTP;
