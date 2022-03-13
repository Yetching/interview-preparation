/* eslint-disable no-extend-native */
// 第一版

// todo bind实现的功能点： 1.改变this指向 2.返回一个函数 3.可以传参柯里化，即func.bind(this, a)(b) => func(a,b)

Function.prototype.bind2 = function(context, ...rest) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const self = this
  const args = Array.prototype.slice.call(rest)

  return function() {
    // eslint-disable-next-line prefer-rest-params
    const bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(context, args.concat(bindArgs))
  }
}

const foo = {
  value: 1,
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
  context.func = this
  const args = rest
  const result = context.func(...args)
  delete context.func
  return result
}

console.log(bar.call2(foo, 'vue', 'best'))

// todo apply实现的功能点： 1.改变this指向并执行 2.传入参数数组
Function.prototype.apply2 = function(context, arr) {
  context = context || window
  context.func = this
  const result = context.func(...arr)
  delete context.func
  return result
}
console.log(bar.apply2(foo, ['vue', 'best']))
