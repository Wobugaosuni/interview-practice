import React from 'react'

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    
    this.state = {
      x: 0, 
      y: 0,
      isMove: false
    }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div 
        onMouseMove={this.handleMouseMove} 
        onMouseEnter={() => this.setState({isMove: true})} 
        onMouseLeave={() => this.setState({isMove: false})}
        style={{...this.props.style}}
      >
        {/* ...但我们如何渲染 <p> 以外的东西? */}
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        {
          this.props.children(this.state)
        }
      </div>
    )
  }
}

export default Mouse