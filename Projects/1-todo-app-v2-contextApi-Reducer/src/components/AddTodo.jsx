import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useContext } from "react";
import TodoContextApi from "../store/TodolistContextApi";

function AddTodo() {
  // const [itemName, setItemName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const nameRef = useRef(); //**************************************use of form and useRef
  const dueDateRef = useRef();

  const { addNewItem } = useContext(TodoContextApi);
  // const addItemName = (event) => {
  //   setItemName(event.target.value);
  // };

  // const addDueDate = (event) => {
  //   setDueDate(event.target.value);
  // };
  const onclickEventAnonymous = (event) => {
    event.preventDefault();
    const itemName = nameRef.current.value;
    const dueDate = dueDateRef.current.value;
    nameRef.current.value = "";
    dueDateRef.current.value = "";

    addNewItem(itemName, dueDate);
    // setItemName("");
    // setDueDate("");
  };
  return (
    <div className="container text-center">
      <form onSubmit={onclickEventAnonymous} className="row a-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={nameRef} />
        </div>
        <div className="col-4">
          <input type="date" placeholder="Select Data Here" ref={dueDateRef} />
        </div>
        <div className="col-2 colwidth">
          <button type="submit" className="btn btn-success a-button">
            <IoIosAddCircle className="b-button" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
