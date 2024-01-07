import TodoContextApi from "../store/TodolistContextApi";
import AddItem1 from "./AddItem1";
import { useContext } from "react";

const TodoItems = () => {
  const todoItems = useContext(TodoContextApi);

  return (
    <div>
      {todoItems.todoItems.map((item) => (
        <AddItem1 key={item} todoitem={item.name} tododate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
