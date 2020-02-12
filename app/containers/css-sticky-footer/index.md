## sticky footers(面试常问)

如果页面内容不够长的时候，页脚块粘贴在视窗底部；
如果内容足够长时，页脚块会被内容向下推送。
实现：
```html
<div class="detail">
  <div class="detail-wrapper">
  </div>
  <div class="footer-wrapper">
    <i class="icon-close"></i>
  </div>
</div>
```

```css
.detail
  width: 100%
  height: 100%
  overflow: auto
  
  .detail-wrapper
    box-sizing: border-box
    min-height: 100%
    padding-bottom: 64px /* 为footer预留的空间 */
    
  .footer-wrapper
    margin-top: -64px /* 向上偏移64px  */
    height: 64px /* 占据的高度 */
```