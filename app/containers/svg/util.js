import * as d3 from 'd3'

// 界定时间范围
const startDate = new Date().setHours(7, 0, 0, 0).valueOf()
const endDate = new Date().setHours(24, 0, 0, 0).valueOf()

function random(lower, upper) {
  return Math.floor(Math.random() * (upper - lower+1)) + lower
}

export function getData() {
  const allData = []

  // i += 1 * 1* 1000 为5-6万数据
  // i += 1 * 1 * 500 为10万数据
  // i += 1 * 1 * 200 为30万数据
  // i += 1 * 10 * 500 为1.2万数据
  // i += 1 * 10 * 300 为20万数据
  // i += 1 * 1 * 50  为百万数据
  for (let i = startDate; i <= endDate; i += 1 * 1 * 300) {
    allData.push({
      createdAt: new Date(i),
      id: Math.random() * 1.1,
      score: random(1,100),
    })
  }

  return allData
}


// 格式化时间参数
const zh = d3.timeFormatLocale({
  decimal: '.',
  thousands: ',',
  grouping: [3],
  currency: ['¥', ''],
  dateTime: '%a %b %e %X %Y',
  date: '%m/%d/%Y',
  time: '%H:%M:%S',
  periods: ['', ''],
  days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  shortDays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  shortMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
})
const formatMillisecond = zh.format('.%L')
const formatSecond = zh.format(':%S')
const formatMinute = zh.format('%H:%M')
const formatHour = zh.format('%H:00')
const formatDay = zh.format('%a %d')
const formatWeek = zh.format('%b %d')
const formatMonth = zh.format('%B')
const formatYear = zh.format('%Y')
  
export function multiFormat(date) {
  let time
  if (Number.isInteger(date.valueOf() / 3600000)
  
  && date.valueOf() !== new Date().setHours(24, 0, 0, 0)) {
    time = (d3.timeSecond(date) < date ? formatMillisecond
              : d3.timeMinute(date) < date ? formatSecond
              : d3.timeHour(date) < date ? formatMinute
              : d3.timeDay(date) < date ? formatHour
              : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
              : d3.timeYear(date) < date ? formatMonth
              : formatYear)(date)
  } else {
    time = ''
  }
  return time
}

export function getContainer() {
  // 先删除之前的canvas/svg
  d3.select('svg').remove()
  d3.select('canvas').remove()

  const board = d3.select('body')
    .append('svg')
    .attr('id', 'board')
    .attr('width', '100vw')
    .attr('height', '100vh')
    .attr('viewBox', '0,0,2000,1000')
    .attr('preserveAspectRatio', 'xMidYMid meet')

  // 生成背景
  board.append('rect')
    .attr('width', 2000)
    .attr('height', 1000)
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)
    .attr('fill', '#1c1e2f')

  const g1 = board.append('g')
    .attr('class', 'g1')
    .attr('transform', 'translate(40,100)')

  g1.append('rect')
    .attr('width', 1920)
    .attr('height', 800)
    .attr('fill', '#fff')
    // .attr('opacity', 0.2)

  return g1
}

const margin = {top: 20, right: 20, bottom: 20, left: 40}
const width = 1920 - margin.left - margin.right
const height = 800 - margin.top - margin.bottom

// 时间比例尺x轴
export const xScale = d3.scaleTime()
  .domain([startDate, endDate])
  .range([0, width])
  .clamp(true)

export const yScale = d3.scaleLinear()
  .domain([0, 100])
  .rangeRound([height - 40, 0])

export function drawAxis(parent) {
  // 绘制x轴
  const xAixs = parent.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', `translate(30,${height - 20})`)
  xAixs.call(
        d3.axisBottom(xScale)
        .ticks(d3.timeHour.every(1))
        .tickFormat(multiFormat)
        .tickSize(4) 
        ).selectAll('text')
        .attr('y', 15)
        .attr('x', 0)
        .attr('dy', '.25em')
        .style('text-anchor', 'middle')

  // 绘制y轴
  const yAixs = parent.append('g')
            .attr('class', 'yaxis')
            .attr('transform', 'translate(30, 20)')
  yAixs.call(
          d3.axisLeft(yScale)
            .ticks(10) 
            .tickSize(1) 
            .tickFormat(d => d)
            .tickSizeInner(-width)
          )
}

// 颜色比例尺
export const colorScale = d3.scaleOrdinal()
      .range(d3.schemeCategory10)

export function drawCircle(parent, data) {
  // const startTime = +new Date()
  // return new Promise(resolve => {

    parent
      .selectAll('circle')
      .data(data, d => d.createdAt)
      .enter()
      .append('circle')
      .attr('id', d => d.createdAt)
      .attr('cx', d => xScale(d.createdAt) + 30)
      .attr('cy', d => yScale(d.score))
      .attr('fill', d => colorScale(d.score))
      .attr('fill-opacity', 0.6)
      .attr('r', d => 4)

    // const endTime = +new Date()
    // console.log(`花费了${endTime - startTime}毫秒`)

  //   resolve()
  // })
}

/**
 * 数据分组函数
 * data：原始数组
 * count：每组数量
 */
export function groupFn(data, count=1000) {
  const cloneArray = [].concat(data) // 相当于克隆，不对原数组改动
  const result = []
  const len = Math.ceil(cloneArray.length / count)

  for (let i = 0; i < len; i += 1) {
    const arr = cloneArray.splice(0, count)
    result.push(arr)
  }
  
  return result
}