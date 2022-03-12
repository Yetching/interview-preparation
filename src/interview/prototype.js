// 继承

// 原型链继承

function Parent(name = 'kevin') {
  this.name = name
  this.colors = ['red', 'white']
}

function Child() {}

Child.prototype = new Parent()

const child1 = new Child()

const child2 = new Child()

console.log('原型链继承')

console.log(child1.name)

console.log(child2.name)

child1.colors.push('blue')

console.log(child1.colors)

console.log(child2.colors)

// 构造函数继承
function Child2(name) {
  Parent.call(this, name)
  this.oweProperty = 'child2'
}

const child3 = new Child2('react')

console.log('构造函数继承')

console.log(child3)

// 组合继承
function Child3(name) {
  Parent.call(this, name)
  this.oweProperty = 'child3'
}

Child3.prototype = new Parent()

// 使得child4.__proto__ = Child3.prototype Child3.prototype.constructor = Child3
// 维持原型链关系
Child3.prototype.constructor = Child3

const child4 = new Child3('vue')
console.log('组合式继承')
console.log(child4)

// 原型式继承

function createObj(source) {
  function F() {}
  F.prototype = source
  return new F()
}

const person = {
  name: 'angular',
  friends: ['vue', 'react'],
}
const person1 = createObj(person)
const person2 = createObj(person)

person1.name = 'person1'

console.log('原型式继承')
console.log(person1.name)
console.log(person2.name)

// 寄生式继承

// ...

// 寄生组合式继承
function Child4(name) {
  Parent.call(this, name)
}

const F = function() {}

F.prototype = Parent.prototype

// todo q: 为什么不直接Child4.prototype = Parent.prototype? a: 保证原型链
Child4.prototype = new F()
