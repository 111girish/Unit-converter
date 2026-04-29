import "./UnitConverter.css";
import { useState } from "react";
import LengthConverter from "./LengthConverter";

function UnitConverter() {
  const [conversion, setConversion] = useState('mass');

  return (
    <div>
      <h3>Unit Converter</h3>
      <div>
        <label>Choose the unit: </label>
        <select value={conversion}
          onChange={(e) => {setConversion(e.target.value)}}
        >
          <option value="length">Length</option>
          <option value="mass">Mass</option>
          <option value="temperature">Temperature</option>
          <option value="time">Time</option>
        </select>
      </div>
      
      {conversion == 'length' && 
        <LengthConverter />
      }
      
    </div>
  );
}

export default UnitConverter;
