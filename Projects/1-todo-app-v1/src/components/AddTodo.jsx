function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row a-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" placeholder="Select Data Here" />
        </div>
        <div className="col-2 colwidth">
          <button type="button" className="btn btn-success a-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
