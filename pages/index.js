import { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import styles from "@styles/Home.module.css";
import "react-phone-input-2/lib/bootstrap.css";

export default function Home() {
  const [phone, setPhone] = useState("");
  return (
    <div className={styles.container}>
      <header>
        <Image src="/logo.png" alt="Kococare Logo" width={32} height={31.2} />
      </header>

      <h1 className={styles.title}>Hello Parent!</h1>
      <p styles={styles.text}>
        Thank you for choosing care. It’s super awesome to have you here. Let’s
        start your parenting journey.
      </p>
      <h2 styles={styles.subtitle}>
        Let’s set up your account.
        <br />
        You can do so with your phone number.
      </h2>
      <PhoneInput
        country="in"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
}
