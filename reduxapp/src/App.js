import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementNum, decrementNum } from "./actions";
// In your React component
import "./App.css";
const App = () => {
  const myState = useSelector((state) => state.changeTheNum);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter Using React and Redux</h1>
      </div>
      <div className="container">
        <a
          href="#"
          title="Decrement"
          onClick={(e) => {
            e.preventDefault();
            dispatch(decrementNum());
          }}
        >
          <span>-</span>
        </a>
        <input name="quantity" type="text" value={myState} readOnly />
        <a
          href="#"
          title="Increment"
          onClick={(e) => {
            e.preventDefault();
            dispatch(incrementNum());
          }}
        >
          <span>+</span>
        </a>
      </div>
    </>
  );
};

export default App;
