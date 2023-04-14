class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(day: number, month: number, year: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
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

  get getDay() {
    return this.day;
  }
}

const myDate = new MyDate(29, 3, 2000);
// console.log(myDate.addPadding(5));
console.log(myDate.printFormat());
console.log(myDate.getDay);


export { }