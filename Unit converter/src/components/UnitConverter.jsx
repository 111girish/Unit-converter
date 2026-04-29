import "./UnitConverter.css";
import { useState } from "react";
import { convertLength } from "../logic/length";

function UnitConverter() {
  const [userValue, setUserValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const [fromConvert, setFromConvert] = useState('cm');
  const [toConvert, setToConvert] = useState('cm');

  const result = convertLength(userValue, fromConvert, toConvert);

  function handleClick(e) {
    e.preventDefault();
    setResultValue(result);

  }


  return (
    <div>
      <h3>Unit Converter</h3>
      <div>
        <label>Choose the unit: </label>
        <select>
          <option value="length">Length</option>
          <option value="mass">Mass</option>
          <option value="temperature">Temperature</option>
          <option value="time">Time</option>
        </select>
      </div>
      <div>
        <div>
          <input
            value={userValue}
            onChange={(e) => {
              setUserValue(e.target.value);
            }}
          ></input>
          <select id={fromConvert}
            onChange={(e) => {setFromConvert(e.target.value)}}
          >
            <option value={"mm"}>mm</option>
            <option value={"cm"}>cm</option>
            <option value={"m"}>m</option>
            <option value={"km"}>km</option>
          </select>
        </div>
        <div>
          <input
            readOnly="true"
            value={resultValue}
          ></input>
          <select id={toConvert}
            onChange={(e) => {setToConvert(e.target.value)}}>
            <option value={"mm"}>mm</option>
            <option value={"cm"}>cm</option>
            <option value={"m"}>m</option>
            <option value={"km"}>km</option>
          </select>
        </div>
        <button
          onClick={handleClick}
        >Convert</button>
      </div>
    </div>
  );
}

export default UnitConverter;
