import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import './index.styl'
import '../../common/stylus/base.styl'
import png1 from './1.png'
import png2 from './2.png'
import {getTextWidth} from '../../common/js/utils'
import MultipleLineEllipsis from '../../components/multiple-line-ellipsis'

const text = '【网络】23集全 之前收藏的23集全集挂了，联系up未果，决定自己补上。课程介绍：我们来到这个世上，到底追求什么才是最重要的？他坚定地认为：幸福感是衡量人生的唯一标准，是所有目标的最终目标。塔尔博士被誉为"最受欢迎讲师"和"人生导师"。讲师：TalBen Shahar，心理学讲师，心理学硕士、哲学组织和行为学博士。'

class CssEllipsis extends React.Component {
  render() {
    getTextWidth(text)
    return (
      <div role="containers:CssEllipsis">
        <h2>单行省略</h2>
        <div className="single-line">{text}</div>

        <h2>1. CSS多行省略：webkit-box</h2>
        <div className="same-content multi-line">{text}</div>

        <h2>2. 我做的多行省略</h2>
        <div className="my-line my-line1">
          <MultipleLineEllipsis text="少字测试" />
        </div>
        <div className="same-content my-line">
          <MultipleLineEllipsis line="2" text={text} bgColor="purple" />
        </div>

        <h2>3. 哔哩哔哩方案</h2>
        <img width="600" src={png1} />
        <img width="600" src={png2} />
        <div className="bili-line" style={{height: 'auto'}}>
          {text}
        </div>
      </div>
    )
  }
}

export default CssEllipsis
