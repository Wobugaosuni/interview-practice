import * as d3 from 'd3'

import {xScale, yScale, colorScale, multiFormat} from './util'

export default function(allData) {
  console.info('数据条数' + allData.length)

  // 先删除之前的canvas/svg
  d3.select('svg').remove()
  d3.select('canvas').remove()

  const width = 1200
  const height = 800
  const margin = { top: 20, bottom: 30, left: 30, right: 20 }
  const renderWidth = width - margin.left - margin.right
  const renderHeight = height - margin.top - margin.bottom

  const canvas = d3.select('body')
        .append('canvas')
        .attr('width', width)
        .attr('height', height)
        .style('border','1px solid #ddd')

  const context = canvas.node().getContext('2d')
  context.translate(margin.left, margin.top)

  xAxis()
  function xAxis() {
    const tickSize = 4
    const ticks = xScale.ticks(d3.timeHour.every(1))
    const tickFormat = xScale.tickFormat(multiFormat)

    context.beginPath()
    ticks.forEach(function(d) {
      context.moveTo(xScale(d), renderHeight)
      context.lineTo(xScale(d), renderHeight + tickSize)
    })
    context.strokeStyle = "black"
    context.stroke()

    context.textAlign = "center"
    context.textBaseline = "top"
    ticks.forEach(function(d) {
      context.fillText(tickFormat(d), xScale(d), renderHeight + tickSize)
    });

    context.moveTo(0, renderHeight+0.5);
    context.lineTo(renderWidth, renderHeight+0.5);
    context.stroke()
  }

  yAxis()
  function yAxis() {
    const tickCount = 10
    const tickSize = 6
    const tickPadding = 3
    const ticks = yScale.ticks(tickCount)
    const tickFormat = yScale.tickFormat(tickCount)

    context.beginPath();
    ticks.forEach(function(d) {
      context.moveTo(0, yScale(d));
      context.lineTo(-6, yScale(d));
    });
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.moveTo(-tickSize, 0);
    context.lineTo(0.5, 0);
    context.lineTo(0.5, renderHeight);
    context.lineTo(-tickSize, renderHeight);
    context.strokeStyle = "black";
    context.stroke();

    context.textAlign = "right";
    context.textBaseline = "middle";
    ticks.forEach(function(d) {
      context.fillText(tickFormat(d), -tickSize - tickPadding, yScale(d));
    });

    context.save();
    context.rotate(-Math.PI / 2);
    context.textAlign = "right";
    context.textBaseline = "top";
    context.font = "bold 10px sans-serif";
    // context.fillText("Price (US$)", -10, 10);
    context.restore();
  }

  const cloneArray = [].concat(allData)
  const batchSize = 1000
  const batchCount = cloneArray.length / batchSize
  let batchDone = 0 // 已完成的批处理个数

  // 画圆圈
  const startTime = +new Date()
  draw()
  function draw() {
    const datas = cloneArray.splice(0, batchSize)
    context.strokeStyle = 'blue'

    datas.forEach((d, i) => {
      context.beginPath();  
      context.strokeStyle = colorScale(d.score)
      // context.moveTo(x(d.createdAt), y(d.score)-5) 
      context.arc(xScale(d.createdAt),yScale(d.score)-5,5,0,2*Math.PI,true)
      context.closePath()
      context.stroke()
    })
    
  
    batchDone += 1
    drawBatch()
  }

  function drawBatch() {
    if (batchDone < batchCount) {
      window.requestAnimationFrame(draw)
    } else {
      const endTime = +new Date()
      console.log(`花费了${endTime - startTime}毫秒`)
    }
  }
}