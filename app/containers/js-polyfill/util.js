Function.prototype.call2 = function(obj) {
  // 当不传obj时，指向window
  obj = obj || window

  // 1. 获取调用call的函数，用this可以获取。
  // this 指向函数bar
  obj.fn = this

  // 2. 获取其他参数
  // 但这个是es6的写法！！
  // const otherArgu = [...arguments].slice(1)
  const otherArgu = []
  for (let i = 1; i < arguments.length; i++) {
    otherArgu.push(arguments[i])
  }
  const arguStr = otherArgu.join(',')

  // 3. 执行函数，eval返回字符串中代码的返回值
  const result = eval('obj.fn(arguStr)')

  // 4. 删除该函数
  delete obj.fn

  return result
}
  