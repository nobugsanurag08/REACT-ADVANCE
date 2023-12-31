import styles from "./Items.module.css";

const Items = (props) => {
  const props1 = props;
  const purchaseItem = (event) => {
    console.log(event.target.value);
    console.log(`purchased item is ${props1.item1}`);
  };
  return (
    <>
      <li key={props1.item1} className="list-group-item ">
        {props1.item1}
        <button
          type="button"
          className={`${styles.button} btn btn-info`}
          onClick={purchaseItem}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Items;
