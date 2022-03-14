/* eslint-disable no-extend-native */
// 第一版

// todo bind实现的功能点： 1.改变this指向 2.返回一个函数 3.可以传参柯里化，即func.bind(this, a)(b) => func(a,b)

Function.prototype.bind2 = function(context, ...rest) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this
  const args = rest

  return function() {
    // const bindArgs = Array.prototype.slice.call(arguments)
    // eslint-disable-next-line prefer-rest-params
    const bindArgs = [...arguments]
    return self.apply(context, args.concat(bindArgs))
  }
}

const foo = {
  value: 1,
  bar() {
    console.log('foo.bar')
  },
}
function bar(name, value) {
  console.log(this)
  console.log(name, value)
  return this.value
}

console.log(bar.bind2(foo, 'vue')('best'))

// todo call实现的功能点： 1.改变this指向并执行

Function.prototype.call2 = function(context, ...rest) {
  // undefined和null的情况下非严格模式指向window
  context = context || window
  context.bar = this
  const args = rest
  const result = context.bar(...args)
  delete context.bar
  return result
}

console.log(bar.call2(foo, 'vue', 'best'))

// todo apply实现的功能点： 1.改变this指向并执行 2.传入参数数组
Function.prototype.apply2 = function(context, arr) {
  context = context || window
  // 使用symbol防止对象有重名属性，delete时删掉了
  const fn = Symbol('func')
  context[fn] = this
  const result = context[fn](...arr)
  delete context[fn]
  return result
}
console.log(bar.apply2(foo, ['vue', 'best']))
