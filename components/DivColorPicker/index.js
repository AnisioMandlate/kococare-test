import styles from "@styles/ColourPicker.module.css";

const ColourPicker = ({ colourName, colourCode }) => {
  return (
    <div className={styles.container}>
      <div className={styles[`${colourCode}`]}></div>
      <p className={styles["colour-name"]}> {colourName} </p>
    </div>
  );
};

export default ColourPicker;
