import AddItem1 from "./AddItem1";

const TodoItems = (props) => {
  console.log(props);
  const props1 = props;

  return (
    <div>
      {props1.todoItems.map((item) => (
        <AddItem1
          key={item}
          todoitem={item.name}
          tododate={item.dueDate}
          onclickEvent={props1.onclickEvent}
        />
      ))}
    </div>
  );
};

export default TodoItems;
