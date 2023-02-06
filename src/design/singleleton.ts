/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

// TODO 保证一个类只有一个可供全局访问的实例

console.log('单例模式');

// 静态方法
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

// 构造函数
class SingleletonV2 {
  static instance: any
  constructor() {
    if(!SingleletonV2.instance) {
      SingleletonV2.instance = this
    }
    return SingleletonV2.instance
  }
}

const c1 = new SingleletonV2()

const c2 = new SingleletonV2()

console.log(c1 === c2); // true


const s1 = new Singleleton()

const s2 = new Singleleton()

const s3 = Singleleton.getInstance()

const s4 = Singleleton.getInstance()

console.log(s1 === s2); // false

console.log(s3 === s4); // true

// Storage 
// return 保证操作返回值与原生保持一致
class MyStorage {
  static instance: any
  static getInstance() {
    if(!MyStorage.instance) {
      MyStorage.instance = new MyStorage()
    }
    return MyStorage.instance
  }
  getItem(key: string) {
    return localStorage.getItem(key)
  }
  setItem(key: string, value: any) {
    return localStorage.setItem(key, value)
  }
}

// 闭包

function baseStorage() {}

baseStorage.prototype.setItem = (key: string, value: any) => {
  return localStorage.setItem(key, value)
}

baseStorage.prototype.getItem = (key : string) => {
  return localStorage.getItem(key)
}

const FakeStorage = (function() {
  let instance: any
  return function () {
    if(!instance) {
      instance = new (baseStorage as any)()
    }
    return instance
  }
})()

const fakeS1 = new (FakeStorage as any)()

console.log(fakeS1.setItem('fakeStorage', '88888'));

// Modal
interface ModalOpt {
  title: string
  message: string
}
class Modal {
  static instance: any
  static getInstance(opt: any) {
    if(!Modal.instance) {
      Modal.instance = new Modal(opt)
    }
    return Modal.instance
  }
  el: any
  constructor(opt: ModalOpt) {
    const { title, message } = opt
    const modal: any = document.createElement('div')
    modal.innerText = title + message
    modal.style = 'position: absolute; left: 50%; top: 50%; cursor: pointer'
    modal.onclick = () => {
      this.hide()
    }
    this.el = modal
  }
  show() {
    document.body.appendChild(this.el)
  }
  hide() {
    document.body.removeChild(this.el)
  }
}

const modal1 = Modal.getInstance({title: 'vue', message: 'hello'})

const modal2 = Modal.getInstance({title: 'react', message: 'world'})

console.log(modal1 === modal2);


