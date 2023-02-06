/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

console.log('原型');

function Dog(this: any, name: string, age: string) {
  this.name = name
  this.age = age
}

Dog.prototype.say = function() {
  console.log(`I'm ${this.name}`);
}

class Cat {
  name: string
  age: string
  constructor(name: string, age: string) {
    this.name = name
    this.age = age
  }
  say() {
    console.log(`I'm ${this.name}`);
  }
}

const dog = new (Dog as any)('brick', '20')

const cat = new Cat('steve', '10')

console.log(dog._proto_ === Dog.prototype);

dog.say()