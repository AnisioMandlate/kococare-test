import { useState } from "react";
import Image from "next/image";
import Button from "@components/Button";
import Input from "@components/Input";
import styles from "@styles/SignUp.module.css";


const SignUp = () => {
    const [name, setName] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [data, setData] = useState(1);

    function handleChange(event) {
    const { name, value } = event.target;
    setName({ [name]: value });
  }

  function handleClick(id) {
    console.log(id)

  }


  const items = [
  {
    id: 1,
    label: "I’m a new parent",
    value: "I’m a new parent",
  },
  {
    id: 2,
    label: "I have been a parent before",
    value: "I have been a parent before",
  },
  {
    id: 3,
    label: "I live with my pack (Experienced)",
    value: "I live with my pack (Experienced)",
  },
];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <Image src="/logo-green.png" alt="Kococare Logo" width={32} height={31.2} />
        </header>
        <h2 className={styles.title}>Hey, what should we call you?</h2>
        <Input 
        name="username" 
        type="text"
        value={name["username"]}
        placeholder="eg: Ramesh Suresh"
        onChange={handleChange} 
      />
        <h2 className={styles.title}>and, What is your experience level as a pet parent? </h2>
        <div className={styles.["items-list"]}>
          {items.map((item) => 
          (
            <div key={item.id} value={item.value} className={styles.item} onClick={(e) => selectedItems.push(e.target.value)}>
              <p>{item.label}</p>
            </div>
          )
          )}
        </div>
      </div>
      <div className={styles.["bottom-text"]}>
        <div className={styles.back}>
            <Image src="/ArrowRight.png" alt="Right Arrow" width={24} height={24}/>
        </div>
        <Button className >
          Next
        </Button> 

        
      </div>
    </div>
  );
};

export default SignUp;
