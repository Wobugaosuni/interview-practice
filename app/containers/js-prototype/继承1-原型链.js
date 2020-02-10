export default function() {
  function Father() {
    this.names = ['jack', 'rose']

    getName = function() {
      console.log(1)
    }
  }

  function getName (){
    console.log(5)
  }

  Father.prototype.getName = function() {
    return this.names
  }

  console.log(new Father().getName()) // ["jack", "rose"]

  function Son() {}
  // 继承 Father 的属性和方法
  Son.prototype = new Father()

  // --------------测试--------------

  const son1 = new Son()
  son1.names.push('lily')
  console.log('son1 names:', son1.names) // ["jack", "rose", "lily"]
  console.log('son1 getName:', son1.getName()) // 实现了原型对象方法的继承 ["jack", "rose", "lily"]

  const father = new Father()
  console.log('father names:', father.names)
  console.log('father getName:', father.getName())

  const son2 = new Son()
  console.log('son2 names:', son2.names)
}