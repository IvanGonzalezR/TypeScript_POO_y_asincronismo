class MyDate {

  // Se pueden quitar los this modificando el constructor:
  // es obligatorio colocar el tipo de acceso (public or private)
  constructor(
    public day: number = 22,
    public month: number = 1,
    private year: number = 1994
  ) {

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

const myDate = new MyDate();
console.log(myDate.printFormat());
const myDate2 = new MyDate(12);
console.log(myDate2.printFormat());


export { }