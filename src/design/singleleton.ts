/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

// TODO 保证一个类只有一个可供全局访问的实例

class Singleleton {
  static instance: any
  say() {
    console.log('singleleton');
  }
  static getInstance() {
    if(!Singleleton.instance) {
      Singleleton.instance = new Singleleton()
    }

    return Singleleton.instance
  }
}

const s1 = new Singleleton()

const s2 = new Singleleton()

const s3 = Singleleton.getInstance()

const s4 = Singleleton.getInstance()

console.log(s1 === s2); // false

console.log(s3 === s4); // true

class SingleDog {
  constructor() {

  }
}

const d1 = new SingleDog()

const d2 = new SingleDog()

console.log(d1 === d2);


