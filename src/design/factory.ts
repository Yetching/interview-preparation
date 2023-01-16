/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import './factory'

// Todo 解决最小变化

console.log('简单工厂')

// 构造器

const lite1 = {
  name: 'vue',
  role: 'framework',
}

// 构造器:不同实例
function Lite(this: any, name: string, role: string) {
  this.name = name
  this.role = role
}

const lite2 = new (Lite as any)('vue', 'framework')

console.log(lite1, lite2);

// 工厂:不同类
function User(this: any, name: string, role: string, desc: string) {
  this.name = name
  this.role = role
  this.desc = desc
}

function Factory(name: string, role: string,) {
  let desc
  switch(role) {
    case 'framework': {
      desc = 'this is framework...'
      break
    }
    case 'language': {
      desc = 'this is language'
      break
    }
  }
  return new (User as any)(name, role, desc)
}

const user1 = new (Factory as any)('vue', 'framework', )
const user2 = new (Factory as any)('java', 'language', )

console.log(user1, user2);
