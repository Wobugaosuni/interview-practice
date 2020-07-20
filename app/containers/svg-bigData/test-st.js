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
    
    const startTime = +new Date()
    // 数据分组渲染
    const groups = groupFn(data)
    loadAll()

    function loadAll() {
      // 数据分组， 每组1000条
      for (let i = 0; i < groups.length; i += 1) {
        setTimeout(() => {
          const g = groups[i]
          const index = i + 1
          loadPart(g, index)
        }, 50)
      }
    }
    let currIndex = 0
    function loadPart(group, index) {
      // 保证顺序不错乱
      while (index - currIndex === 1) {
        drawCircle(parent, group)
        currIndex = index
      }

      // 循坏完了
      if (groups.length === index + 1) {
        const endTime = +new Date()
        console.log(`花费了${endTime - startTime}毫秒`)
      }
    }
    
    return parent
  }
    


  const g1 = getContainer()

  draw(g1)
}