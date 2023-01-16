/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

// TODO 封闭性原则，只扩展不修改

console.log('抽象工厂');

// 大的抽象类

class Phone {
  createOS(): any{
    return '等待重载'
  }
  createHW() : any {
    return '等待重载'
  }
}

class Os {
  createHello() {
    console.log('初始系统')
  }
}

class Android extends Os {
  createHello(): void {
    console.log('我是安卓系统');
  }
}

class Ios extends Os {
  createHello(): void {
    console.log('我是苹果系统');
  }
}

class HW {
  createBrand() {
    console.log('品牌');
  }
  createSerise() {
    console.log('系列');
  }
}

class Mi extends HW {
  createBrand(): void {
    console.log('小米');
  }
  createSerise(): void {
    console.log('初始系列');
  }
}

class DigitMi extends Mi {
  createSerise(): void {
    console.log('数字系列');
  }
}

class FakePhone extends Phone {
  createOS() {
    return new Android()
  }
  createHW() {
    return new DigitMi()
  }
}

const myPhone = new FakePhone()

const os = myPhone.createOS()

const hw = myPhone.createHW()

os.createHello()

hw.createBrand()

hw.createSerise()

// TODO 如果我要生产另外一台不同配置的手机，我不需要修改Phone类，重新构造一个类去继承
// TODO 同理，如果有新的操作系统和硬件等等我们直接拓展类就行
