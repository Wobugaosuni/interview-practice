## pureComponent、纯函数组件的区别

- pureComponent  
pureComponent会监听props和state的变化，里面有个关键方法- shallowEqual，**只做浅比较**。如果是有嵌套层次的数组和对象，还是用 shouldComponentUpdate 手动比较比较适合
使用PureComponent的最佳情况就是**纯展示组件**，它既没有子组件，也没有依赖应用的全局状态
  1. 有生命周期的
  2. 父组件更新了，但是props没有变化，pureComponent是不会渲染的

- 纯函数组件
  1. 没有生命周期。纯展示。
  2. 只要父组件更新了，无论props有没有变化，纯函数组件会再次渲染

扩展：pureComponent功能和**useMemo**差不多，监听props变化了才更新