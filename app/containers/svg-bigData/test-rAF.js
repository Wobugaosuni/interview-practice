import * as d3 from 'd3'

import {getContainer, drawAxis, drawCircle, groupFn} from './util'

export default function(data) {
  const spendTimes = []

  // 渲染图形逻辑draw
  function draw(container) {
    // const startTime = +new Date()
    console.info('数据条数' + data.length)

    const parent = container
      .append('g')
      .attr('class', 'wv-line')
      .attr('id', 'wv-line')

    drawAxis(parent)
    
    // 数据分组渲染
    const spliceData = groupFn(data)

    rAF()

    // √ requestAnimationFrame
    function rAF() {
      const startTime = +new Date()
      const currentData = spliceData.shift()
      drawCircle(parent, currentData)

      const endTime = +new Date()
      spendTimes.push(endTime - startTime)

      // 还需要循坏
      if (spliceData.length) {
        requestAnimationFrame(rAF)
      }

      // 循坏完了
      if (!spliceData.length) {
        console.log('per spendTimes:', spendTimes)
        console.log(`花费了${ d3.sum(spendTimes)}毫秒`)
      }
    }
    
    return parent
  }
    


  const g1 = getContainer()

  draw(g1)
}