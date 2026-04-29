import { useState } from "react";
import { convertLength } from "../logic/length";

function LengthConverter() {
  const [userValue, setUserValue] = useState(0);
  const [fromConvert, setFromConvert] = useState("cm");
  const [toConvert, setToConvert] = useState("cm");

  return (
    <div>
      <div>
        <input
          value={userValue}
          onChange={(e) => {
            setUserValue(e.target.value);
          }}
        ></input>
        <select
          value={fromConvert}
          onChange={(e) => {
            setFromConvert(e.target.value);
          }}
        >
          <option value={"mm"}>mm</option>
          <option value={"cm"}>cm</option>
          <option value={"m"}>m</option>
          <option value={"km"}>km</option>
        </select>
      </div>
      <div>
        <input
          readOnly
          value={convertLength(userValue, fromConvert, toConvert)}
        ></input>
        <select
          value={toConvert}
          onChange={(e) => {
            setToConvert(e.target.value);
          }}
        >
          <option value={"mm"}>mm</option>
          <option value={"cm"}>cm</option>
          <option value={"m"}>m</option>
          <option value={"km"}>km</option>
        </select>
      </div>
    </div>
  );
}

export default LengthConverter;
