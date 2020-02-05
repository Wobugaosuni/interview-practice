## 单行省略

没啥好说的，直接上代码
  ```css
  overflow hidden // 超出内容隐藏
  white-space nowrap // 不换行
  text-overflow ellipsis // 末尾加省略号
  ```

## 多行省略css实现

-webkit-line-clamp，不兼容IE。PC端一般不用此方法

  ```css
  display -webkit-box
  -webkit-box-orient vertical // 相当于 flex-direction
  -webkit-line-clamp 2
  overflow hidden
  ```

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
