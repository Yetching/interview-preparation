// eslint-disable-next-line @typescript-eslint/no-unused-vars
const scope = 'global scope'
function checkscope() {
  let count = 0
  return function() {
    console.log(count++)
  }
}
const fn = checkscope()

fn()

fn()

// todo 闭包

// todo 变量提升
function foo(bar) {
  console.log(bar)
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  function bar() {
    console.log('bar')
  }
}

foo('name')
