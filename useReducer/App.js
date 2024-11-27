import React from "react";

const defaultState = {
  count: 0,
};

export function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    const updatedState = { ...state };
    updatedState.count += 1;
    return updatedState;
  }
  if (action.type === "DECREMENT") {
    const updatedState = { ...state };
    updatedState.count -= 1;
    return updatedState;
  }
  if (action.type === "RESET") {
    const updatedState = { ...state };
    updatedState.count = 0;
    return updatedState;
  }

  return state;
}

function App() {
  const [state, dispatch] = React.useReducer(counterReducer, {
    ...defaultState,
  });

  function handleAdd() {
    dispatch({
      type: "INCREMENT",
    });
  }

  function handleSubtract() {
    dispatch({
      type: "DECREMENT",
    });
  }

  function handleReset() {
    dispatch({
      type: "RESET",
    });
  }

  return (
    <div id="app">
      <h1>{state.count}</h1>
      <p id="actions">
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleSubtract}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter"></p>
    </div>
  );
}

export default App;
