// 继承

// 原型链继承

function Parent() {
  this.name = 'kevin'
  this.colors = ['red', 'white']
}

function Child() {}

Child.prototype = new Parent()

const child1 = new Child()

const child2 = new Child()

console.log(child1.name)

console.log(child2.name)

child1.colors.push('blue')

console.log(child1.colors)

console.log(child2.colors)

// 构造函数继承
