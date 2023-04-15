abstract class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  move() {
    console.log('moving along!');
  }
  greeting() {
    return `Hello, i'm ${this.name}`;
  }
  protected doSomething() {

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
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }
  // Polimorfismo
  move(): void {
    console.log('Moving as a dog');
    super.move()
  }
}

const chase = new Dog('Chase', 'Kike');
// chase.name;
chase.bark(5);
chase.move();



export { Animal, Dog }