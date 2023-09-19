import React, { useState } from 'react';

const Counter = ({ count }) => {
  // Use the useState hook to initialize the count
  const [currentCount, setCurrentCount] = useState(count);

  // Use increment and decrement the count
  const increment = () => {
    setCurrentCount(currentCount + 1);
  };

  const decrement = () => {
    // count stops at 0 
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
    }
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p>Count: {currentCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;