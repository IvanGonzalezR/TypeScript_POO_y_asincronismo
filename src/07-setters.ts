class MyDate {

  // Se pueden quitar los this modificando el constructor:
  // es obligatorio colocar el tipo de acceso (public or private)
  constructor(
    private _day: number = 22,
    private _month: number = 1,
    public year: number = 1994
  ) {

  }

  printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    // code
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(newMonth: number) {
    if (newMonth >= 1 && newMonth <= 12) {
      this._month = newMonth;
    } else {
      throw new Error('Month out of range');
    }
  }
}

const myDate = new MyDate(25, 3, 2000);
console.log(myDate.printFormat());
myDate.month = 0;
console.log(myDate.printFormat());


export { }