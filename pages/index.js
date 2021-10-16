import Image from "next/image";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Image src="/logo.png" alt="Kococare Logo" width={32} height={31.2} />
      </header>

      <h1>Hello Parent!</h1>
      <p>
        Thank you for choosing care. It’s super awesome to have you here. Let’s
        start your parenting journey
      </p>
      <h2>
        Let’s set up your account.
        <br />
        You can do so with your phone number.
      </h2>
    </div>
  );
}
