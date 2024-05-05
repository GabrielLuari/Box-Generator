import Styles from './app.module.css';
import Box from './components/Box';
import Box1 from './components/Box1';
import React, { useState } from 'react';

function App() {
  const [boxes, setBoxes ] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  return (
    <>
      <Box addBox={addBox} />
      <div className={Styles.boxContainer}>
        {boxes.map((box, index) => (
          <Box1 key={index} box={box} />
        ))}
      </div>
    </>
  );
}

export default App;
