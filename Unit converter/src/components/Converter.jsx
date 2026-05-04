// import { convertLength, lengthConversion } from "../logic/length";
// import { massConversion, convertMass } from "../logic/mass";
// import { timeConversion, convertTime } from "../logic/time";
// import { convertTemp } from "../logic/temperature";
// import { useEffect, useState } from "react";
// import "./Converter.css"

// const defaultConversion = {
//   length: ["cm", "m"],
//   mass: ["gm", "kg"],
//   temperature: ["c", "f"],
//   time: ["hour", "sec"],
// };

// function Converter({ conversion }) {
//   const [userValue, setUserValue] = useState(0);
//   const [fromConvert, setFromConvert] = useState("gm");
//   const [toConvert, setToConvert] = useState("kg");

//   function swapHandle() {
//     setFromConvert(toConvert);
//     setToConvert(fromConvert);
//   }

//   useEffect(() => {
//       setFromConvert(defaultConversion[conversion][0]);
//       setToConvert(defaultConversion[conversion][1]);
//   }, [conversion]);

//   let keys;
//   let result;
//   if (conversion == "length") {
//     keys = Object.keys(lengthConversion);
//     result = convertLength(userValue, fromConvert, toConvert);
//   } else if (conversion == "mass") {
//     keys = Object.keys(massConversion);
//     result = convertMass(userValue, fromConvert, toConvert);
//   } else if (conversion == "time") {
//     keys = Object.keys(timeConversion);
//     result = convertTime(userValue, fromConvert, toConvert);
//   } else if (conversion == "temperature") {
//     result =
//       fromConvert && toConvert
//         ? convertTemp(userValue, fromConvert, toConvert)
//         : 0;
//   }
//   return (
//     <>
//       <div>
//         <input
//           value={userValue}
//           onChange={(e) => {
//             setUserValue(parseFloat(e.target.value) || 0);
//           }}
//         ></input>
//         {conversion != "temperature" && (
//           <select
//             value={fromConvert}
//             onChange={(e) => {
//               setFromConvert(e.target.value);
//             }}
//           >
//             {keys.map((key) => (
//               <option key={key} value={key}>
//                 {key}
//               </option>
//             ))}
//           </select>
//         )}
//         {conversion == "temperature" && (
//           <select
//             value={fromConvert}
//             onChange={(e) => {
//               setFromConvert(e.target.value);
//             }}
//           >
//             <option value="c">c</option>
//             <option value="f">f</option>
//             <option value="k">k</option>
//           </select>
//         )}
//       </div>
//       <div>
//         <button onClick={swapHandle}>
//           Swap Button
//         </button>
//       </div>
//       <div>
//         <input readOnly value={result}></input>
//         {conversion != "temperature" && (
//           <select
//             value={toConvert}
//             onChange={(e) => {
//               setToConvert(e.target.value);
//             }}
//           >
//             {keys.map((key) => (
//               <option key={key} value={key}>
//                 {key}
//               </option>
//             ))}
//           </select>
//         )}
//         {conversion == "temperature" && (
//           <select
//             value={toConvert}
//             onChange={(e) => {
//               setToConvert(e.target.value);
//             }}
//           >
//             <option value="c">c</option>
//             <option value="f">f</option>
//             <option value="k">k</option>
//           </select>
//         )}
//       </div>
//     </>
//   );
// }

// export default Converter;

import { convertLength, lengthConversion } from "../logic/length";
import { massConversion, convertMass } from "../logic/mass";
import { timeConversion, convertTime } from "../logic/time";
import { convertTemp } from "../logic/temperature";
import { useEffect, useState } from "react";
import "./Converter.css";

const defaultConversion = {
  length: ["cm", "m"],
  mass: ["gm", "kg"],
  temperature: ["c", "f"],
  time: ["hour", "sec"],
};

function Converter({ conversion }) {

  const [userValue, setUserValue] = useState("");
  const [fromConvert, setFromConvert] = useState("gm");
  const [toConvert, setToConvert] = useState("kg");

  function swapHandle() {
    setFromConvert(toConvert);
    setToConvert(fromConvert);
  }

  useEffect(() => {
    setFromConvert(defaultConversion[conversion][0]);
    setToConvert(defaultConversion[conversion][1]);
  }, [conversion]);

  const parsedValue = parseFloat(userValue);

  let keys;
  let result;
  if (conversion === "length") {
    keys = Object.keys(lengthConversion);
    result = convertLength(parsedValue, fromConvert, toConvert);
  } else if (conversion === "mass") {
    keys = Object.keys(massConversion);
    result = convertMass(parsedValue, fromConvert, toConvert);
  } else if (conversion === "time") {
    keys = Object.keys(timeConversion);
    result = convertTime(parsedValue, fromConvert, toConvert);
  } else if (conversion === "temperature") {
    result =
      fromConvert && toConvert
        ? convertTemp(parsedValue, fromConvert, toConvert)
        : 0;
  }

  return (
    <>
      {/* FROM row */}
      <div className="converter-row">
        <span className="row-label">FROM</span>
        <input
          className="unit-input"
          value={userValue}
          placeholder="0"
          onChange={(e) => {
            setUserValue(e.target.value);
          }}
        />
        {conversion !== "temperature" && (
          <select
            className="unit-select"
            value={fromConvert}
            onChange={(e) => setFromConvert(e.target.value)}
          >
            {keys.map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        )}
        {conversion === "temperature" && (
          <select
            className="unit-select"
            value={fromConvert}
            onChange={(e) => setFromConvert(e.target.value)}
          >
            <option value="c">°C</option>
            <option value="f">°F</option>
            <option value="k">K</option>
          </select>
        )}
      </div>

      {/* Swap */}
      <div className="swap-wrapper">
        <div className="divider-line" />
        <button className="swap-btn" onClick={swapHandle} title="Swap units">
          ⇅
        </button>
        <div className="divider-line" />
      </div>

      {/* TO row */}
      <div className="converter-row">
        <span className="row-label">TO</span>
        <input
          className="unit-input"
          readOnly
          value={isNaN(result) ? "—" : result}
        />
        {conversion !== "temperature" && (
          <select
            className="unit-select"
            value={toConvert}
            onChange={(e) => setToConvert(e.target.value)}
          >
            {keys.map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        )}
        {conversion === "temperature" && (
          <select
            className="unit-select"
            value={toConvert}
            onChange={(e) => setToConvert(e.target.value)}
          >
            <option value="c">°C</option>
            <option value="f">°F</option>
            <option value="k">K</option>
          </select>
        )}
      </div>
    </>
  );
}

export default Converter;