import React from "react";

function App() {
  const [buttonBool, setButtonBool] = React.useState(null);

  let textColor = "white";

  if (buttonBool === "yes") {
    textColor = "green";
  } else if (buttonBool === "no") {
    textColor = "red";
  } else {
    textColor = "white";
  }

  return (
    <div id="app">
      <h1
        style={{
          color: textColor,
        }}
      >
        CSS is great!
      </h1>
      <menu>
        <li>
          <button onClick={() => setButtonBool("yes")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setButtonBool("no")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
