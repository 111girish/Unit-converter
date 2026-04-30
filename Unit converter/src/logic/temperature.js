// function ctof(n){
//   const result = (n * 9/5) + 32;
//   return result;
// }

// function ftoc(n){
//   const result = (n - 32) * 5/9;
//   return result;
// }

// function ktoc(n){
//   const result = n - 273.15;
//   return result;

// }

// function ctok(n){
//   const result = n + 273.15;
//   return result;
// }

// function ftok(n){
//   const result = (n - 32) * 5/9 + 273.15;
//   return result;

// }

// function ktof(n){
//   result = (n- 273.15) * 9/5 + 32;
// }

export const temperatureConversion = {
  ctof: (n) => (n * 9) / 5 + 32,
  ftoc: (n) => ((n - 32) * 5) / 9,
  ktoc: (n) => n - 273.15,
  ctok: (n) => n + 273.15,
  ftok: (n) => ((n - 32) * 5) / 9 + 273.15,
  ktof: (n) => ((n - 273.15) * 9) / 5 + 32,
  ctoc: (n) => n,
  ftof: (n) => n,
  ktok: (n) => n,
};

export function convertTemp(number, from, to) {
  if ((from == "c" || from == "k" || from == "f") && (to =='c' || to =='k' || to =='f')) {
    const conversion = `${from}to${to}`;
    const result = from && to ? temperatureConversion[conversion](number) : 0;
    return result;
  } else {
    return 0;
  }
}
