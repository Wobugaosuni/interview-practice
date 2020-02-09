## Error Boundaries

当抛出错误后，请使用 `static getDerivedStateFromError()` 渲染备用 UI ，使用 `componentDidCatch()` 打印错误信息

>注意
如果发生错误，你可以通过调用 `setState` 使用 `componentDidCatch()` 渲染降级 UI，但在未来的版本中将不推荐这样做。 可以使用静态 `getDerivedStateFromError()` 来处理降级渲染。

## 错误边界
react的组件  
可以捕获并打印发生在其**子组件树**任何位置的 JavaScript 错误，并且，它会渲染出备用 UI

## 错误边界**无法捕获**以下场景中产生的错误：
1. 事件处理
2. 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
3. 服务端渲染
4. 它自身抛出来的错误（并非它的子组件）

## 错误边界应该放置在哪？
错误边界的粒度由你来决定，可以将其包装在最顶层的路由组件并为用户展示一个 “Something went wrong” 的错误信息，就像服务端框架经常处理崩溃一样。你也可以将单独的部件包装在错误边界以保护应用其他部分不崩溃

## 文档参考

- [官方](https://zh-hans.reactjs.org/docs/error-boundaries.html#introducing-error-boundaries)