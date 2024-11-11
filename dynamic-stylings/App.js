import React from "react";

// don't change the Component name "App"
export default function App() {
  const [styling, setStyling] = React.useState(false);

  function setActive() {
    setStyling(true);
  }

  function setInactive() {
    setStyling(false);
  }

  return (
    <div>
      <p className={styling ? "active" : null}>Style me!</p>
      <button onClick={setActive}>Toggle style</button>
    </div>
  );
}
