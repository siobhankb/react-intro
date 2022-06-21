import React, { useState } from 'react';
import Button from './components/Button';
import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0)
  const handleButtonClick = (step) => {
    setCount(count + step)
  }
  const myButtonSteps = [1, 10, 100, 1000]
  return (
    <div id="fromApp">
      <Nav brand="React Intro" />
      <div className="container">
        <h1>Hello World</h1>
        <h3>Current Value: {count}</h3>
        {myButtonSteps.map((step, i) => <Button step={step} handleClick={handleButtonClick} key={i} />)}
      </div>
    </div>
  );
  
}

export default App;
