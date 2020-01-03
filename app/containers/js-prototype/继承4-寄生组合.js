function extend(a, b) {
  a.prototype = b.prototype

  a.prototype.constructor = a
}

export default function() {
  function Father() {
    this.names = ['jack', 'rose']
  }

  Father.prototype.getName = function() {
    return this.names
  }

  // 继承父类的实例属性和方法
  function Son(age) {
    this.age = age

    Father.call(this)
  }

  // 继承父类方法
  extend(Son, Father)

  Son.prototype.getAge = function() {
    return this.age
  }

  // --------------测试--------------

  const son1 = new Son(23)
  son1.names.push('lily')
  console.log('son1 names:', son1.names)
  console.log('son1 getName:', son1.getName())
  console.log('son1 getAge:', son1.getAge())

  const father = new Father()
  console.log('father names:', father.names)
  console.log('father getName:', father.getName())
  
  const son2 = new Son(24)
  console.log('son2 names:', son2.names)
  console.log('son2 getAge:', son2.getAge())
}

