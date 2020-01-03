function test() {
  function Father() {
    this.name = ['jack', 'rose']
  }

  // ----------------part------------------
  Father.prototype.getName = () => console.log(Father.name)
  // 原型对象会自动获得一个constructor（构造函数）属性，这个属性对应类本身（构造函数）
  console.log('Father.prototype constructor:', Father.prototype.constructor === Father) // true
  console.log('Fahter 可枚举的属性:', Object.keys(Father.prototype)) // ['getName']

  // ----------------part------------------
  Father.prototype = {
    getName: () => console.log(Father.name)
  }
  // 重写后的constructor指向Object
  console.log('Father.prototype constructor:', Father.prototype.constructor === Object) // true
  console.log('Fahter 可枚举的属性:', Object.keys(Father.prototype)) // ['getName']

  // ----------------part------------------
  Father.prototype = {
    constructor: Father, // 指向自身
    getName: () => console.log(Father.name)
  }
  // 重写后的constructor指向自身，变成可枚举的
  console.log('Father.prototype constructor:', Father.prototype.constructor === Father) // true
  console.log('Father.prototype constructor:', Father.prototype.constructor === Object) // false
  console.log('Fahter 可枚举的属性:', Object.keys(Father.prototype)) // ['constructor', getName']
}

export default test