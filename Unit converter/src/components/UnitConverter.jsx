// import { useState } from "react";
// import Converter from "./Converter";
// import "./UnitConverter.css"

// function UnitConverter() {
//   const [conversion, setConversion] = useState('mass');

//   return (
//     <div>
//       <h3>Unit Converter</h3>
//       <div>
//         <label>Choose the unit: </label>
//         <select value={conversion}
//           onChange={(e) => {setConversion(e.target.value)}}
//         >
//           <option value="length">Length</option>
//           <option value="mass">Mass</option>
//           <option value="temperature">Temperature</option>
//           <option value="time">Time</option>
//         </select>
//       </div>
      
//       <Converter conversion={conversion} />
//     </div>
//   );
// }

// export default UnitConverter;

import "./UnitConverter.css";
import { useState } from "react";
import Converter from "./Converter";

function UnitConverter() {
  const [conversion, setConversion] = useState("mass");

  const categories = ["length", "mass", "temperature", "time"];
  

  return (
    <div className="app-wrapper">
      <div className="card">
        <div className="card-header">
          <div className="header-tag">PRECISION TOOL</div>
          <h1 className="title">Unit <span className="title-accent">Converter</span></h1>
        </div>

        <div className="category-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${conversion === cat ? "active" : ""}`}
              onClick={() => setConversion(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <Converter conversion={conversion} />
      </div>
    </div>
  );
}

export default UnitConverter;