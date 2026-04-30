
export const massConversion = {
  gm: 1,
  kg: 1000,
  mg: 0.001,
}

export function convertMass(number, from, to){
  const gram = number * massConversion[from];
  const result = gram / massConversion[to];
  return result;
}