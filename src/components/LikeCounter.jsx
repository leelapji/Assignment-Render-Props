import React, { useState } from 'react';

const LikeCounter = ({ render }) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return render(counter, handleCounter);
};

export default LikeCounter;
