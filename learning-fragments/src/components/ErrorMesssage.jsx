const ErrorMessage = (props) => {
  const props1 = props;
  return (
    <>
      {props1.foodItems.length === 0 ? (
        <h3> I am hungry</h3>
      ) : (
        <h3>You Can select your meal from below lists</h3>
      )}
    </>
  );
};
export default ErrorMessage;
