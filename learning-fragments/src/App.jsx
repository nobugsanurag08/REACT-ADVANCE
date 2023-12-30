import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMesssage";
// import React from "react";
function App() {
  let foods = [
    "Dal",
    "Green Vegetable",
    "Roti",
    "Salad",
    "Palak Paneer",
    "Butter Paneer",
    "Kolha Puri Paneer",
  ];
  // if (foods.length === 0) {
  //   return <div>Sorry We dont have information as of now</div>;
  // }
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems={foods} />
      <FoodItems foodItems={foods}></FoodItems>
    </>
  );
}

export default App;
