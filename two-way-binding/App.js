import React from 'react';
import Review from "./Review";

// don't change the Component name "App"
function App() {
  const [feedback, changeFeedback] = React.useState(null)
  const [student, changeStudent] = React.useState(null)

  function handleFChange(event) {
    changeFeedback(event.target.value);
  }

  function handleSChange(event) {
    changeStudent(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleFChange}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={student} onChange={handleSChange}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={student} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
