import { Animal, Dog } from "./09-protected";

// no deja porque Animal es abstracta
// const animal = new Animal('elite');
// animal.greeting();

const chase = new Dog('chase', 'nico');
chase.greeting();
