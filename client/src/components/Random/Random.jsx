import React, { useState } from 'react';
import './Random.css'; // Import your CSS styles for the Random page

const coolThings = [
  'A breathtaking sunset over the ocean.',
  'A delicious ice cream cone on a hot summer day.',
  'A cozy fireplace and a good book on a rainy afternoon.',
  'A spontaneous road trip with friends to a new destination.',
  'A surprise birthday party with loved ones.',
  // Add more random cool things here
];

const Random = () => {
  const [randomCoolThing, setRandomCoolThing] = useState('');

  const generateRandomCoolThing = () => {
    const randomIndex = Math.floor(Math.random() * coolThings.length);
    setRandomCoolThing(coolThings[randomIndex]);
  };

  return (
    <div className="random-container">
      <h1 className="random-title">Random world</h1>
      <button className="random-button" onClick={generateRandomCoolThing}>
        Click me
      </button>
      {randomCoolThing && (
        <div className="random-cool-thing">
          <p>{randomCoolThing}</p>
        </div>
      )}
    </div>
  );
};

export default Random;
