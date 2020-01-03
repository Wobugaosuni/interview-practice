export default function() {
  function Father() {
    this.names = ['jack', 'rose']
  }

  Father.prototype.getName = function() {
    return this.names
  }

  // 引用类型的实例属性都指向了不同的地址
  function Son() {
    Father.call(this)
  }

  // --------------测试--------------
  
  const son1 = new Son()
  son1.names.push('lily')
  console.log('son1 names:', son1.names)
  console.log('son1 getName:', son1.getName()) // 没法实现原型对象方法的继承，会报错

  const father = new Father()
  console.log('father names:', father.names)
  console.log('father getName:', father.getName())
  
  const son2 = new Son()
  console.log('son2 names:', son2.names)
}