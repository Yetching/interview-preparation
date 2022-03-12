/* eslint-disable no-extend-native */
// 第一版

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
