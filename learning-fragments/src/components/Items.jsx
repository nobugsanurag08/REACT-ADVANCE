const Items = (props) => {
  const props1 = props;
  return (
    <li key={props1.item1} className="list-group-item">
      {props1.item1}
    </li>
  );
};
export default Items;
