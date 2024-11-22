import React from "react";

function App() {
  const file = React.useRef();

  function handleClick() {
    file.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          data-testid="file-picker"
          type="file"
          accept="image/*"
          ref={file}
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
