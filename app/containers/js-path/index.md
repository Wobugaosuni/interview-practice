## split

注意，使用 split 时如果分隔符在开头或者结尾出现，会返回空字符串

```js
'abcabc'.split('a') // ['', 'bc', 'bc']

'abcabc'.split('b') // ['a', 'ca', 'c']

'/home/'.split('/') // ['', 'home', '']
```