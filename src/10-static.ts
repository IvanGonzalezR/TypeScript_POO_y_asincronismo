console.log(Math.PI);
const numbers: number[] = [ 1, 2, 4, 5, 2, 22, 4, 21 ]
const numbers2: number[] = [ -9, -8, -2 ]
console.log(Math.max(...numbers));


class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, current) => max > current ? max : current);
  }
}

console.log(MyMath.PI);
// MyMath.PI = 123;
console.log(MyMath.max(...numbers2));

