import * as d3 from 'd3'

import {getContainer, drawAxis, drawCircle} from './util'

export default function(data) {
  // 渲染图形逻辑draw
  function draw(container) {
    const startTime = +new Date()
    console.info('数据条数' + data.length)

    const parent = container
      .append('g')
      .attr('class', 'wv-line')
      .attr('id', 'wv-line')

    drawAxis(parent)
      
    drawCircle(parent, data)
    
    const endTime = +new Date()
    console.log(`花费了${endTime - startTime}毫秒`)

    return parent
  }
    


  const g1 = getContainer()

  draw(g1)
}