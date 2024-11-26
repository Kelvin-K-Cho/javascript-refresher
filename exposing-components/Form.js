import React from "react";

const Form = React.forwardRef(function Form({}, ref) {
  const action = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      clear() {
        action.current.reset();
      },
    };
  });

  return (
    <form ref={action}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
});

export default Form;
