import Buttons from "./components/Buttons";
import DisplayInOut from "./components/Display-in-out";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  let buttons = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    "=",
    "0",
    ".",
  ];
  const [currVal, setCurrVal] = useState("");
  const selectButton = (selectedKeyNumber) => {
    // console.log("button selected!!", selectedKeyNumber);

    if (selectedKeyNumber === "C") {
      setCurrVal("");
    } else if (selectedKeyNumber === "=") {
      const result = eval(currVal);
      setCurrVal(result);
    } else {
      const newNumber = currVal + selectedKeyNumber;
      setCurrVal(newNumber);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <h4 className={styles.heading}>Calculator</h4>
        <DisplayInOut currVal={currVal} />
        <Buttons buttons={buttons} onclickEvent={selectButton} />
      </div>
    </>
  );
}

export default App;
