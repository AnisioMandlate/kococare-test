import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import Button from "@components/Button";
import styles from "@styles/CompleteSetup.module.css";


const CompleteSetup = () => {
 
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <Image src="/logo.png" alt="Kococare Logo" width={32} height={31.2} />
        </header>
        <h2 className={styles.title}>Let’s get to know each other</h2>
      </div>
      <div className={styles.["bottom-text"]}>
         <p className={styles.backlink}>
          Help us fine tune the features of this app to fit you and your pet’s needs better
        </p>
        <Button>
          <Link href="/otp">Let’s go!</Link>
        </Button> 
        
      </div>
    </div>
  );
};

export default CompleteSetup;
