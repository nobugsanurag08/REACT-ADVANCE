import styles from "./Display-in-out.module.css";
const DisplayInOut = (props) => {
  const props1 = props;
  return (
    <div className={styles.display}>
      <input
        type="text"
        placeholder="Output "
        readOnly
        value={props1.currVal}
      />
    </div>
  );
};
export default DisplayInOut;
