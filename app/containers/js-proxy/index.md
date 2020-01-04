## Object.defineProperty

vue2.0

#### 缺点

1. 无法监听属性值是数组的变化

2. 只能劫持对象的属性，因此需要对对象的属性进行遍历（如果属性值是对象，需要进行深度遍历）

## Proxy

是 defineProperty 的全方位加强版
vue3.0

#### 优点

1. 能监听数组的变化

2. 监听对象而非属性
直接可以劫持整个对象，并返回一个新对象


## 文档参考

- [](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)
- [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)