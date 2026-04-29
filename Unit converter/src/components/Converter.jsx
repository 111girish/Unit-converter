import { lengthConversion } from "../logic/length";

function Converter() {
  const keys = Object.keys(lengthConversion);

  return(
    <>
      <select>
      {keys.map((key) => (
        <option value={key}>key</option>
      ))}
      </select>
    </>

  );

}

export default Converter