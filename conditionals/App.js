import React from "react";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"

function App() {
  const [warning, setWarning] = React.useState(false);

  function deleteHandler() {
    setWarning(true);
  }

  function startHandler() {
    setWarning(false);
  }

  let content = null;

  if (warning) {
    content = (
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={startHandler}>Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {content}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default App;
