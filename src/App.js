import React, { useState } from 'react';
import Button from './components/Button';
import Nav from './components/Nav';

function App() {
  const [count, setCount] = useState(0)
  const handleButtonClick = (step) => {
    setCount(count + step)
  }
  return (
    <div id="fromApp">
      <Nav brand="React Intro" />
      <div className="container">
        <h1>Hello World</h1>
        <h3>Current Value: {count}</h3>
        <Button step={1} handleClick={handleButtonClick} />
        <Button step={10} handleClick={handleButtonClick} />
        <Button step={100} handleClick={handleButtonClick} />
        <Button step={1000} handleClick={handleButtonClick}  />
      </div>
    </div>
  );
  
}

export default App;
