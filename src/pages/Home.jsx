import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  fiveDecrement,
  fiveIncrement,
} from "../redux/counterSlice.js";
import { Link } from "react-router-dom";

function Home() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment(1));
  }
  function handleDecrement() {
    dispatch(decrement(1));
  }
  function handleFiveIncrement() {
    dispatch(fiveIncrement(5));
  }
  function handleFiveDecrement() {
    dispatch(fiveDecrement(5));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-slate-300 container mx-auto rounded-lg p-4 flex items-center justify-between">
        <Link className="btn btn-active btn-link" to="/login">
          Login sahifasiga otish
        </Link>
        <Link className="btn btn-active btn-link" to="/register">
          Register sahifasiga otish
        </Link>
      </div>
      <div className="rounded-lg flex gap-4 items-center flex-col container mx-auto w-[600px] p-5 bg-cyan-800">
        <h3 className="text-5xl text-white font-semibold font-mono">
          {counter}
        </h3>

        <div className="flex gap-4 items-center">
          <button
            className="w-10 rounded-md text-lg font-bold p-1 bg-green-400"
            onClick={handleIncrement}
          >
            +1
          </button>
          <button
            className="w-10 rounded-md text-lg font-bold p-1 bg-red-400"
            onClick={handleDecrement}
          >
            -1
          </button>
          <button
            className="w-10 rounded-md text-lg font-bold p-1 bg-green-400"
            onClick={handleFiveIncrement}
          >
            +5
          </button>
          <button
            className="w-10 rounded-md text-lg font-bold p-1 bg-red-400"
            onClick={handleFiveDecrement}
          >
            -5
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
