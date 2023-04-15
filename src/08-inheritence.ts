class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  move() {
    console.log('moving along!');
  }
  greeting() {
    return `Hello, i'm ${this.name}`;
  }
}

class Dog extends Animal {
  public owner: string;
  constructor(name: string, owner: string) {
    super(name);
    this.owner = owner;
  }
  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('Woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const chase = new Dog('Chase', 'Kike');
chase.move();
console.log(chase.greeting());
chase.bark(5);
console.log(chase.owner);




export { Animal }