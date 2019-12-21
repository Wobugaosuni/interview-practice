## react遍历数组时，为何要加key -- 网易游戏

key 是用来帮助 react **识别哪些内容被增删改**
key 需要写在用数组渲染出来的元素内部，并且需要赋予其一个**稳定的值**

- key标识当前项的唯一性
如果出现了相同的 key：
1. 会抛出一个 Warning，告诉相邻组件间有重复的 key 值。
2. react 15版本：只会渲染第一个重复 key 值中的元素

- key默认为数组的index

- key: 不可读，组件内部是访问不到key值的

- key应该是稳定的
如果使用数组的index作key，每次向数组头部插入时，后面的元素都会重新渲染
所以可以使用计数器：
```js
  var localCounter = 1;
  this.data.forEach(el=>{
      el.id = localCounter++;
  });
  //向数组中动态添加元素时，
  function createUser(user) {
      return {
          ...user,
          id: localCounter++
      }
  }
```

- 改变 key 值来重渲染组件是一种——相较于复杂componentWillReceiveProps生命周期——十分低成本的方式

参考：
[谈谈 react 中的 key](https://juejin.im/post/5a7c04746fb9a063461fe700)
[[React技术内幕] key带来了什么](https://juejin.im/post/59abb01c518825243f1b6dad)