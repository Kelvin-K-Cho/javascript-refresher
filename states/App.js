// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

import React from "react";

export default function App() {
  const [discount, updateDiscount] = React.useState("$100");

  return (
    <div>
      <p data-testid="price">{discount}</p>
      <button onClick={() => updateDiscount("$75")}>Apply Discount</button>
    </div>
  );
}
