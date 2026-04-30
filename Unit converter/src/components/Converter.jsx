import { convertLength, lengthConversion } from "../logic/length";
import { massConversion, convertMass } from "../logic/mass";
import { timeConversion, convertTime } from "../logic/time";
import { convertTemp } from "../logic/temperature";
import { useState } from "react";

function Converter({ conversion }) {
  const [userValue, setUserValue] = useState(0);
  const [fromConvert, setFromConvert] = useState("gm");
  const [toConvert, setToConvert] = useState("kg");


  let keys;
  let result;
  if (conversion == "length") {
    keys = Object.keys(lengthConversion);
    result = convertLength(userValue, fromConvert, toConvert);
  } else if (conversion == "mass") {
    keys = Object.keys(massConversion);
    result = convertMass(userValue, fromConvert, toConvert);
  } else if (conversion == "time") {
    keys = Object.keys(timeConversion);
    result = convertTime(userValue, fromConvert, toConvert);
  } else if (conversion == "temperature") {
    result = fromConvert && toConvert ? convertTemp(userValue, fromConvert, toConvert): 0;
  }
  return (
    <>
      <div>
        <input
          value={userValue}
          onChange={(e) => {
            setUserValue(parseFloat(e.target.value) || 0);
          }}
        ></input>
        {conversion != "temperature" && (
          <select
            value={fromConvert}
            onChange={(e) => {
              setFromConvert(e.target.value);
            }}
          >
            {keys.map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        )}
        {conversion == "temperature" && (
          <select
            value={fromConvert}
            onChange={(e) => {
              setFromConvert(e.target.value);
            }}
          >
            <option value="c">c</option>
            <option value="f">f</option>
            <option value="k">k</option>
          </select>
        )}
      </div>
      <div>
        <input readOnly value={result}></input>
        {conversion != "temperature" && (
          <select
            value={toConvert}
            onChange={(e) => {
              setToConvert(e.target.value);
            }}
          >
            {keys.map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        )}
        {conversion == "temperature" && (
          <select
            value={toConvert}
            onChange={(e) => {
              setToConvert(e.target.value);
            }}
          >
            <option value="c">c</option>
            <option value="f">f</option>
            <option value="k">k</option>
          </select>
        )}
      </div>
    </>
  );
}

export default Converter;
