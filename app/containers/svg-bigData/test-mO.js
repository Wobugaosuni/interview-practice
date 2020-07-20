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

    // 创建MutationObserver
    const mo = new MutationObserver(callback)
    const option = {
      childList: true,
      subtree: true,
    }
    // 监听
    mo.observe(document.body.querySelector('.wv-line'), option)

    // 画第一个分片
    const startTime = +new Date()
    const currentData = spliceData.shift()
    drawCircle(parent, currentData)

    function callback() {
      // 还需要循坏
      if (spliceData.length) {
        requestAnimationFrame(() => drawCircle(parent, spliceData.shift()))
      } else {
        console.log('end')
        const endTime = +new Date()
        console.log(`花费了${endTime - startTime}毫秒`)
      }
    }

    return parent
  }
    


  const g1 = getContainer()

  draw(g1)
}