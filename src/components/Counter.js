import React, { useState, useEffect } from 'react';

const usePersistedState = (initialValue, name) => {
  const [value, setValue] = useState(+localStorage.getItem(name) || initialValue);

  return {
    value,
    setValue,
  }

}

const Counter = () => {
  const counter = usePersistedState(0, 'counter');

  const increment = () => {
    localStorage.setItem('counter', counter.value + 1);
    counter.setValue(counter.value + 1);
  }

  const decrement = () => {
    localStorage.setItem('counter', counter.value - 1);
    counter.setValue(counter.value - 1);
  }

  useEffect(() => {
    document.title = `Counter value: ${counter.value}`;
  })

  return (
    <div>
      Count: {counter.value}
      <button onClick={increment}>Add one</button>
      <button onClick={decrement}>Minus one</button>
    </div>
  )
}

export default Counter;
