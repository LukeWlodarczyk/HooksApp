import React, { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count+1)}>Add one</button>
      <button onClick={() => setCount(count-1)}>Minus one</button>
    </div>
  )
}

export default Counter;
