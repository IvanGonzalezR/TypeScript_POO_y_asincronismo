// function getValue(value: number | string) {
//   return value;
// }

function getValue<T>(value: T) {
  const array: T[] = [ value ];
  return value;
}

console.log(getValue<number>(12.2).toFixed()); // explicito
console.log(getValue('12.2').toLowerCase()); // inferido
console.log(getValue<number[]>([ 10, 22 ]).find(item => item === 10)); // explicito