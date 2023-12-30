import Items from "./items";

const FoodItems = (props) => {
  const props1 = props;
  return (
    <ul className="list-group">
      {props1.foodItems.map((item) => {
        return (
          <>
            <Items item1={item} />
          </>
        );
      })}
    </ul>
  );
};
export default FoodItems;
