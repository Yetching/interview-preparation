/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

console.log('装饰器');


class Computer {
  static instance: any

  constructor() {
    if(!Computer.instance) {
      Computer.instance = this
    }
    return Computer.instance
  }

  playGame() {
    console.log('origin feat ----------');
    console.log('gaming time!');
  }
}

class Decorator {
  target: any
  constructor(target: any) {
    this.target = target
  }
  playMusic() {
    console.log('music time!');
  }
  playVideo() {
    console.log('video time!');
  }
  // 丰富原有功能
  playGame() {
    console.log('decorator feat -----------');
    this.target.playGame()
    this.playMusic()
    this.playVideo()
  }
}

const computer1 = new Computer()

computer1.playGame()

const decorator = new Decorator(computer1)

decorator.playGame()

// 装饰器函数，它的第一个参数是目标类
function classDecorator(target: any) {
  target.prototype.hasDecorator = true
  target.prototype.onclick = () => {
    console.log('装饰器点击事件');
  }
  return target
}

// 类方法装饰器
function classFuncDecorator(target: any, name: string, descriptor: any) {
  let originValue = descriptor.value
  descriptor.value = function() {
    console.log('装饰器 button 移动');
    return originValue.apply(this, arguments)
  }
  return descriptor
}

// 将装饰器“安装”到Button类上
@classDecorator
class Button {
  // Button类的相关逻辑
  @classFuncDecorator
  move() {
    console.log('button 移动');
  }
}

// 验证装饰器是否生效

const btn = new Button() as any

btn.onclick()

btn.move()

console.log(btn.hasDecorator);
