import React from "react";

import Toast from "./Toast";

function App() {
  const [toast, setToast] = React.useState(false);

  function handleEnrol() {
    setToast(true);
    // Todo: Show toast

    setTimeout(() => {
      // Todo: hide toast
      setToast(false);
    }, 3000);
  }

  return (
    <div id="app">
      {/* Todo: Render <Toast /> component (conditionally) here */}
      {toast && <Toast message="Enrolled" />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
