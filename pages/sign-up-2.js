import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import Button from "@components/Button";
import Input from "@components/Input";
import styles from "@styles/SignUp.module.css";
import ImageUpload from "@components/FileUpload";


const SignUp2 = () => {
    const [formData, setFormData] = useState({});
    const [selectedFile, setSelectedFile] = useState();

    const fileUpload = new FormData();
    if (selectedFile) {
      fileUpload.append("file", selectedFile);
    }

    function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData,[name]: value });
  }

  function handleClick(id) {
    console.log(id)

  }


  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <Image src="/logo-green.png" alt="Kococare Logo" width={32} height={31.2} />
        </header>
        <h2 className={styles.title}>Okay! Let’s get to know your doggo, Add a picture of your pet!</h2>
        <div>
          <ImageUpload />
          <Input 
          name="username" 
          type="text"
          value={formData["username"]}
          placeholder="eg: Ramesh Suresh"
          onChange={handleChange} 
        />

        </div>

        

        
        
        <h2 className={styles.title}>and, What is your experience level as a pet parent? </h2>
      
      </div>
      <div className={styles.["bottom-text"]}>
        <div className={styles.back}>
            <Image src="/ArrowRight.png" alt="Right Arrow" width={24} height={24}/>
        </div>
        <Button className >
          <Link href="/signUp2">Next</Link>
        </Button> 

        
      </div>
    </div>
  );
};

export default SignUp2;
