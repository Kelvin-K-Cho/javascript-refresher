import React from "react";

// don't change the Component name "App"
export default function App() {
  const [style, setStyle] = React.useState(false);

  function handleClick() {
    setStyle((style) => !style);
  }

  return (
    <div>
      <p
        style={{
          color: style ? "red" : "white",
        }}
      >
        Style me!
      </p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
