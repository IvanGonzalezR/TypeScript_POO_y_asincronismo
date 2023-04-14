class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(day: number, month: number, year: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(29, 3, 2000);
console.log(myDate.day);
myDate.day = 22;
console.log(myDate.day);
console.log(myDate.printFormat());

export { }