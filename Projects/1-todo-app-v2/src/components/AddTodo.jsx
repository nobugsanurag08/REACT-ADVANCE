import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo(props) {
  const props1 = props;
  const [itemName, setItemName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const addItemName = (event) => {
    setItemName(event.target.value);
  };

  const addDueDate = (event) => {
    setDueDate(event.target.value);
  };
  const onclickEventAnonymous = () => {
    props1.onclickEvent(itemName, dueDate);
    // setItemName("");
    // setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row a-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={addItemName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="Select Data Here"
            onChange={addDueDate}
          />
        </div>
        <div className="col-2 colwidth">
          <button
            type="button"
            className="btn btn-success a-button"
            onClick={onclickEventAnonymous}
          >
            <IoIosAddCircle className="b-button" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
