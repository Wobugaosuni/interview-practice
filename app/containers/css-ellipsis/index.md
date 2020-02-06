## 单行省略

没啥好说的，直接上代码
  ```css
  overflow hidden // 超出内容隐藏
  white-space nowrap // 不换行
  text-overflow ellipsis // 末尾加省略号
  ```

## 多行省略css实现：webkit

-webkit-line-clamp，不兼容IE。PC端一般不用此方法

  ```css
  display -webkit-box
  -webkit-box-orient vertical // 相当于 flex-direction
  -webkit-line-clamp 2
  overflow hidden
  ```

## 多行省略css实现：伪元素

1. 用 `line-height` 和 `max-height` 实现高度自适应
2. 利用 `::before` 添加省略号
3. 当内容不足时，用 `::after` 遮挡省略号。**内容超出时，跟着文本内容的实际高度移动**  
用于挡住省略号的方块也是绝对定位，靠右定位，`right: 0`，但是`bottom`值就不要设置了，如果不设置的话，该方块会跟着文本内容的实际高度移动，而不是`max-height`的高度。这样的话，当不需要省略时（即不超过`max-height`）时，就刚好是`bottom: 0`的情况，就会挡住省略号。当要进行省略时（即超过`max-height`）就会挡不住省略号了，它自己也会被`overflow: hidden`给隐藏掉了

## 高度固定，多行省略的js实现

1. 向body插入元素，通过 `scrollHight` 和 `clientHeight` 判断内容是否超出
```js
if (scrollHeight > clientHeight) {
  // 内容超出
}
```
2. 超出的话，末尾添加伪元素，隐藏超出内容，末尾加 css渐变过渡
```css
.line-ellipsis::after
  height 20px
  padding 0 0 0 80px
  content " "
  font-weight bold
  position absolute
  bottom 0
  right 0
```
多行省略作为组件时，由于背景色是不确定的，过渡色需要使用js控制。
```js
// 动态添加遮罩层
if (isBeyond && !isOpen) {
  document.styleSheets[0].insertRule(`.multiple-line-ellipsis::after{background: linear-gradient(to right, transparent, ${bgColor})}`,0) //chrome,firefox等非IE浏览器使用
  // document.styleSheets[0].addRule('...',0) //IE系列浏览器使用
}
```

缺点：当背景是一张图片时，就比较难搞了！

## 哔哩哔哩的超出方案（2020.2.2截的图）

## 文档参考

- [css高级应用三种方法实现多行省略](https://juejin.im/post/5caeef8be51d456e3b70185d)