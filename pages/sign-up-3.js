import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button";
import Select from "@components/Select";
import styles from "@styles/SignUp.module.css";
import ColourPicker from "@components/DivColorPicker";

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
        <h2 className={styles.title}>
          We want to know some more, What is their breed?
        </h2>
        <Select
          placeholder="I don't know (oops)"
          options={[
            {
              name: "PitBull",
              value: "Pitbull",
            },
            {
              name: "Rottweiler",
              value: "Rottweiler",
            },
            {
              name: "German Shepherd",
              value: "German Shepherd",
            },
            {
              name: "Golden Retriever",
              value: "Golden Retriever",
            },

            { name: "Siberian Husky", value: "Siberian Husky" },
          ]}
          onChange={handleSelectedType}
        />
        <h2 className={styles.title}>and, What’s their gender?</h2>
        <div className={styles["buttons-div"]}>
          <button className={styles.button}>
            <Link href="/sign-up-3">Male</Link>
          </button>
          <Button blue>
            <Link href="/sign-up-3">Female</Link>
          </Button>
        </div>
        <h2 className={styles.title}>
          What is the color your doggo’s fur? You can select multiple colors.
        </h2>
        <div className={styles["colors-grid"]}>
          <ColourPicker colourName="Black" colourCode="black" />
          <ColourPicker colourName="Grey" colourCode="grey" />
          <ColourPicker colourName="Cream" colourCode="cream" />
          <ColourPicker colourName="White" colourCode="white" />
          <ColourPicker colourName="Light Brown" colourCode="lightBrown" />
          <ColourPicker colourName="Dark Brown" colourCode="darkBrown" />
          <ColourPicker colourName="Brown" colourCode="brown" />
          <ColourPicker colourName="Golden" colourCode="golden" />
          <ColourPicker colourName="Light Golden" colourCode="lightGolden" />
        </div>
      </div>
      <div className={styles["bottom-text"]}>
        <div className={styles.back}>
          <Link href="/sign-up-2">
            <Image
              src="/ArrowRight.png"
              alt="Right Arrow"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <Button className>
          <Link href="/sign-up-4">Next</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUp3;
