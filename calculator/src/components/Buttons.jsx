import styles from "./Buttons.module.css";
const Buttons = (props) => {
  const props1 = props;
  console.log(props1.buttons);
  return (
    <>
      <div className={styles.buttonContainer}>
        {props1.buttons.map((item) => {
          return (
            <button key={item} type="button" className={styles.button}>
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Buttons;
