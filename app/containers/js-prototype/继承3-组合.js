export default function() {
  function Father(name) {
    this.name = name
    this.names = ['jack', 'rose']
  }
  Father.prototype.getName = function() {
    return this.names
  }

  // 引用类型的实例属性都指向了不同的地址
  function Son(name) {
    //继承实例属性，第一次调用Father()
    Father.call(this, name)
  }

  // 实现方法的继承，第二次调用Father()
  // 杜绝了原型链的搜索机制
  Son.prototype = new Father()
  // 调整constructor指向，变成可枚举的了
  Son.prototype.constrctor = Son
  console.log('Son:', Son.prototype)

  // --------------测试--------------

  const son1 = new Son()
  son1.names.push('lily')
  console.log('son1 names:', son1.names)
  console.log('son1 getName:', son1.getName())

  const father = new Father()
  console.log('father names:', father.names)
  console.log('father getName:', father.getName())
  
  const son2 = new Son()
  console.log('son2 names:', son2.names)
}