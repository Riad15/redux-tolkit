import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement, reset, oddNumberIncrease } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const increasbtn = () => {
    dispatch(increment());
  };
  const decreasbtn = () => {
    dispatch(decrement());
  };
  const oddIncrease = () =>{
    dispatch(oddNumberIncrease())
  }
  const resetbtn = () => {
    dispatch(reset());
    
  };
  return (
    <div>
      <h1>Counter view</h1>

      <h4>count: {count}</h4>
      <button
        onClick={increasbtn}
        style={{ margin: "5px", padding: "5px 10px" }}
      >
        increase
      </button>
      <button
        onClick={decreasbtn}
        style={{ margin: "5px", padding: "5px 10px" }}
      >
        decrease
      </button>
      <button onClick={resetbtn} style={{ margin: "5px", padding: "5px 10px" }}>
        Reset
      </button>
      <button onClick={oddIncrease} style={{ margin: "5px", padding: "5px 10px" }}>
      Odd Increase
      </button>
    </div>
  );
};

export default CounterView;
