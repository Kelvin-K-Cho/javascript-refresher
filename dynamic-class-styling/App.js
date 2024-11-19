import React from "react";

function App() {
  const [choice, setChoice] = React.useState(undefined);

  let highlightName = "";

  if (choice === "yes") {
    highlightName = "highlight-green";
  } else if (choice === "no") {
    highlightName = "highlight-red";
  }

  return (
    <div id="app">
      <h1 className={`${highlightName}`}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setChoice("yes")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setChoice("no")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
