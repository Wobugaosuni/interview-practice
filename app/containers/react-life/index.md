## 即将过期的生命周期

- UNSAFE_componentWillMount()
- UNSAFE_componentWillUpdate()
- UNSAFE_componentWillReceiveProps(nextProps)

为什么去掉：
究其原因是 Fiber 架构的改变：
在 React 16 中，某些生命周期可能会被调用多次，这是因为在 Fiber 架构下的 reconciler 阶段会被调用多次。即包括 willxxx 的生命周期都包括。从语义角度讲，这样重复调用的行为是不符合 willxxx 函数的语义，为什么明明已经 will 过了又再次 will 呢？

文档参考：
[](http://meloguo.com/2019/01/12/react%E6%96%B0%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/)

## 三个阶段被调用的生命周期

- 挂载阶段  
construtor  
getDerivedStateFromProps  
render  
componentDidMount  

- 更新阶段(setState)  
getDerivedStateFromProps  
shouldComponentUpdate(nextProps, nextState)  
render  
getSnapshotBeforeUpdate  
componentDidUpdate  

- 组件移除阶段  
componentWillUnmount  

## static getDerivedStateFromProps(props, state)

此方法适用于罕见的用例

## getSnapshotBeforeUpdate(prevProps, prevState)
此用法并不常见