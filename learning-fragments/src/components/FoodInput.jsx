import styles from "./FoodInput.module.css";

const FoodInput = (props) => {
  const props1 = props;
  return (
    <>
      <div className={styles.additem}>
        <input
          type="text"
          placeholder=" Enter your food item"
          className={styles.foodInput}
          onKeyDown={props1.handleOnkeyDown}
        />
        <button type="button" className={`${styles.button} btn btn-info`}>
          Add
        </button>
      </div>
    </>
  );
};

export default FoodInput;
