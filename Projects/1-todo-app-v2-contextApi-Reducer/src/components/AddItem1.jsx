import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import TodoContextApi from "../store/TodolistContextApi";

function AddItem1(props) {
  const props1 = props;
  const { deleteItem } = useContext(TodoContextApi);
  // console.log(props1);
  return (
    <div className="container">
      <div className="row a-row">
        <div className="col-6">{props1.todoitem}</div>
        <div className="col-4">{props1.tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger a-button"
            onClick={() => {
              deleteItem(props1.todoitem);
            }}
          >
            <MdDeleteForever className="b-button" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddItem1;
