import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import {simplifyPath} from './util'
import png1 from './1.png'
import png2 from './2.png'

class JsPath extends React.Component {
  render() {
    return (
      <div role="containers:JsPath">
        <h2>简化路径</h2>
        <div>
          以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。
        </div>
        <div>在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：[Linux / Unix中的绝对路径 vs 相对路径](https://blog.csdn.net/u011327334/article/details/50355600)</div>
        <div>
          请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。最后一个目录名（如果存在）不能以 / 结尾。此外，规范路径必须是表示绝对路径的最短字符串
        </div>
        <img width="400" src={png1} />
        <img width="200" src={png2} />
        <button onClick={() => simplifyPath('/home/')}>测试</button>
      </div>
    )
  }
}

export default JsPath
