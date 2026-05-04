//My approach

// const lengthConversion = {
//   mmtom: "/1000",
//   cmtom: "/100",
//   mtokm: "/1000",
//   mtom: "*1",
// }


// function userInput(number, from1, to){
//   const toM= `${from1}tom`;
//   const fromM=`mto${to}`;
//   const meter = `${number}${lengthConversion[toM]}`;
//   const finalMeter = eval(meter);
//   console.log(finalMeter)
//   const fromMeter = `${finalMeter}${lengthConversion[fromM]}`
//   const result = eval(fromMeter);
//   console.log(result);
//   return result;
// }

// userInput(1,"cm","km");

export const lengthConversion = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  mile: 1609.34,
  inch: 0.0254,
}

export function convertLength(number, from, to){
  const meter = number * lengthConversion[from];
  const result = meter / lengthConversion[to];
  return result;
}

