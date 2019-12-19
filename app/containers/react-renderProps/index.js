import React from 'react'

import './index.styl'
import Mouse from './mouse'
import MouseHooks from './mouse-hooks'

const imgSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576329325585&di=548405300aa198e26a9da212149ff572&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180718%2F4f4dde573c314ff18397cde919fa15ec.jpeg'

class Hoc extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div role="containers:Hoc">
        <h2>Render prop</h2>
        <div className="FBH">
          <Mouse style={{width: '400px', height: '400px', backgroundColor: 'pink'}}>
            {
              props => {
                return (
                  <img 
                    src={imgSrc} 
                    style={{ position: 'absolute', left: props.x + 20, top: props.y + 20, width: '30px', height: '30px', display: props.isMove ? 'block' : 'none' }} 
                  />
                )
              }
            }
          </Mouse>

          <MouseHooks style={{width: '400px', height: '400px', backgroundColor: 'purple', color: 'white', marginLeft: '20px'}}>
            {
              props => {
                return (
                  <div 
                    style={{ position: 'absolute', left: props.x, top: props.y, display: props.isMove ? 'block' : 'none' }} 
                  >
                    牛逼
                  </div>
                )
              }
            }
          </MouseHooks>
        </div>
      </div>
    )
  }
}

export default Hoc
