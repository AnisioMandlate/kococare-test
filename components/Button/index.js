import styles from "@styles/Button.module.css";

const Button = ({ children }) => {
  return (
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export default Button;
