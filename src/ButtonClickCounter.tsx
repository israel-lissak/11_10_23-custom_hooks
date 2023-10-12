import { useState } from 'react';

function useButtonClickCounter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  return { count, increment };
}

export default useButtonClickCounter;
