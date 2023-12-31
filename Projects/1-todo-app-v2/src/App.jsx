// import AddItem1 from "./components/AddItem1";
// import AddItem2 from "./components/AddItem2";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
function App() {
  // const todoItems = [
  //   {
  //     name: "Buy milk",
  //     dueDate: "04/10/2023",
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "04/10/2023",
  //   },
  //   {
  //     name: "Buy chips",
  //     dueDate: "04/10/2023",
  //   },
  // ];

  const [todoItems, settodoItems] = useState([
    {
      name: "Buy milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "04/10/2023",
    },
  ]);
  const addNewItem = (name, date) => {
    const addedItem = {
      name: name,
      dueDate: date,
    };
    const addFinalTodoItem = [...todoItems, addedItem];
    settodoItems(addFinalTodoItem);
  };

  const deleteItem = (name) => {
    console.log("hello delete clicked!!", name);
    const newItemList = todoItems.filter((item) => {
      return item.name !== name;
    });
    settodoItems(newItemList);
  };

  return (
    <center>
      <AppName />
      <AddTodo onclickEvent={addNewItem} />
      <div className="item-container">
        <TodoItems todoItems={todoItems} onclickEvent={deleteItem} />
      </div>
    </center>
  );
}

export default App;
