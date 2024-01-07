import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import TodoContextApi from "./store/TodolistContextApi";
function App() {
  const [todoItems, settodoItems] = useState([
    {
      name: "ghee",
      dueDate: "2023-10-04",
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
    const newItemList = todoItems.filter((item) => {
      return item.name !== name;
    });
    settodoItems(newItemList);
  };

  return (
    <TodoContextApi.Provider value={{ todoItems, deleteItem, addNewItem }}>
      <center>
        <AppName />
        <AddTodo />
        <div className="item-container">
          <TodoItems />
        </div>
      </center>
    </TodoContextApi.Provider>
  );
}

export default App;
