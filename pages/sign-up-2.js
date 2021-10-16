import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button";
import Input from "@components/Input";
import styles from "@styles/SignUp.module.css";
import ImageUpload from "@components/FileUpload";

const SignUp2 = () => {
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState();

  const fileUpload = null;
  if (selectedFile) {
    fileUpload.append("file", selectedFile);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleClick(id) {
    console.log(id);
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
        <h2 className={styles.title}>
          Okay! Let’s get to know your doggo, Add a picture of your pet!
        </h2>
        <div className={styles["image-upload"]}>
          <ImageUpload onFileUploaded={setSelectedFile} />
          <p>
            Take a picture or
            <br />
            select from your gallery
          </p>
        </div>
        <h2 className={styles.title}>What did you name your pet?</h2>
        <Input
          name="pet-name"
          type="text"
          value={formData["pet-name"]}
          placeholder="eg: Hope"
          onChange={handleChange}
        />
        <h2 className={styles.title}>What is their date of birthday?</h2>
        <Input
          name="pet-name"
          type="date"
          value={formData["pet-name"]}
          placeholder="Pick a date"
          onChange={handleChange}
        />
        <h2 className={styles.title}>
          <Link href="/">or Add their age instead</Link>
          {/* <div className={styles.age}>
            <Input
              name="pet-name"
              type="date"
              value={formData["pet-name"]}
              placeholder="Pick a date"
              onChange={handleChange}
            />
            <Input
              name="pet-name"
              type="date"
              value={formData["pet-name"]}
              placeholder="Pick a date"
              onChange={handleChange}
            />
          </div> */}
        </h2>
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
          <Link href="/signUp2">Next</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUp2;
