const date = new Date();
date.getHours();
date.getTime();

const date2 = new Date(2000, 2, 29); //0 es Enero, 2 es Marzo
date2.getHours();

console.log(date);
console.log(date2);

// Clase

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2000, 3, 29);
console.log(myDate);

export { }
