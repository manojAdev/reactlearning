import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Hi Manoj?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("Hi Chhavi.");
    }, 10000)
  })

  return <h1>{message}</h1>
};

export default App;