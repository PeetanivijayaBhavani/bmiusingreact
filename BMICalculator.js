import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div className="bmi-calculator">
      <h1>Body Mass Index (BMI) Calculator</h1>
      <div className="input-group">
        <label>
          Height (in cm):
          <input type="number" value={height} onChange={handleHeightChange} />
        </label>
      </div>
      <div className="input-group">
        <label>
          Weight (in kg):
          <input type="number" value={weight} onChange={handleWeightChange} />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default BMICalculator;
