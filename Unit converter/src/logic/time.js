export const timeConversion = {
  hour: 3600,
  minute: 60,
  sec: 1,
}

export function convertTime(number, from, to){
  const toSec = number*timeConversion[from];
  const result = toSec/timeConversion[to];
  return result;

}

