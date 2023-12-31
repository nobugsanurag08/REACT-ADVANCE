import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMesssage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
// import React from "react";
function App() {
  // let foods = [
  //   "Dal",
  //   "Green Vegetable",
  //   "Roti",
  //   "Salad",
  // ];
  // if (foods.length === 0) {
  //   return <div>Sorry We dont have information as of now</div>;
  // }
  // let userInput = "user entered item";
  // const [userInput, setuserInput] = useState("user entered item");
  const [foods, setfoods] = useState([
    "Dal",
    "Green Vegetable",
    "Roti",
    "Salad",
  ]);
  const OnkeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      // userInput = event.target.value;
      let newFoodItem = event.target.value;
      let newItems = [...foods, newFoodItem];
      setfoods(newItems);
    }
  };

  return (
    <Container>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems={foods} />
      <FoodInput handleOnkeyDown={OnkeyDown}></FoodInput>
      {/* <p>{userInput}</p> */}
      <FoodItems foodItems={foods}></FoodItems>
    </Container>
  );
}

export default App;
