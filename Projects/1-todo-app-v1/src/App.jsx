import AddItem1 from "./components/AddItem1";
import AddItem2 from "./components/AddItem2";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
function App() {
  return (
    <center>
      <AppName />
      <AddTodo />
      <div className="item-container">
        <AddItem1 />
        <AddItem2 />
      </div>
    </center>
  );
}

export default App;
