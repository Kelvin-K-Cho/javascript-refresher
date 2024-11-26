import React from "react";

import Form from "./Form";

// Don't change the name of the 'App'
// function and keep it a named export

export function App() {
  const ref = React.useRef();
  function handleRestart() {
    ref.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={ref} />
    </div>
  );
}
