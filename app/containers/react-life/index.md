## 即将过期的生命周期

- UNSAFE_componentWillMount()
- UNSAFE_componentWillUpdate()
- UNSAFE_componentWillReceiveProps()

## 三个阶段被调用的生命周期

- 挂载阶段
construtor
getDerivedStateFromProps
render
componentDidMount

- 更新阶段(setState)
getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate
componentDidUpdate

- 组件移除阶段
componentWillUnmount