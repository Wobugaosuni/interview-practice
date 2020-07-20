## long long ago

- 2D、3D?

- [做过的大屏](https://cdn.dtwave.com/waveview-demo/main/main.html)
- [灵感的源泉1](https://pudding.cool/)
- [灵感的源泉2](https://blockbuilder.org/search)

## 可视化库

| 可视化库 | 版本 | 定制能力 | 渲染引擎 | 绘图引擎 | 图表类型 | 学习成本 |
| --- | --- | --- | --- | --- | --- | --- |
| Echarts | v1.0.0: 2013.6 v4.8.0: 2020.5 | 弱 | <4.0: Canvas 4.0: 新增Svg | Zrender | 2D + 3D | 低 |
| AntV | G2: 2016.5- G6、F2、L7 | “无线可能” | Canvas(默认)、Svg | G | 2D | 中 |
| D3.js  | v1.0.0: 2011.2 v5.16.0: 2020.4 | 无限定制 | 主要Api: Svg 少量Api: Canvas | / | 2D | 高 |

当然了，还有 **datav**，但是，收费……

## Canvas Or Svg

|   | Svg | Canvas |
| --- | --- | --- |
| 适用场景 | 内置了大量的图形、滤镜和动画等，方便进行文档元素的维护，也能导出为文件脱离浏览器环境使用 | 像素级的图形处理，能动态渲染和绘制大数据量的图形 |
| 性能对比 | 受画布尺寸影响更大 | 受图形元素个数影响更大 |
| 定制和交互 | 更有优势，因为有类似 DOM 的结构，能快速应用浏览器底层的鼠标事件、CSS 样式、CSS3 动画等 | 基于 Canvas 做上层封装后也能实现类似的定制和交互，并且自由度更高  |

总结：
1. 小画布、大数据量的场景适合用 Canvas，譬如热力图、大数据量的散点图等。
2. 如果画布非常大，有缩放、平移等高频的交互，或者移动端对内存占用量非常敏感等场景，可以使用 SVG 的方案

## 千万级数据

Echarts: 几千万的地理坐标数据就算使用二进制存储也要占上百 MB 的空间。因此 ECharts 同时提供了对流加载（4.0+）的支持，你可以使用 **WebSocket** 或者对**数据分块**后加载，加载多少渲染多少！不需要漫长地等待所有数据加载完再进行绘制。

## 文档参考

- [Echarts](https://echarts.apache.org/zh/index.html)
- [Zrender](https://ecomfe.github.io/zrender-doc/public/)
- [AntV G2](https://antv.vision/zh)
- [G](https://www.yuque.com/antv/ou292n/dgh2o7)
- [G2 Canvas or SVG](https://g2.antv.vision/zh/docs/manual/tutorial/renderer)
- [使用 Canvas 或者 SVG 渲染](https://echarts.apache.org/zh/tutorial.html#%E4%BD%BF%E7%94%A8%20Canvas%20%E6%88%96%E8%80%85%20SVG%20%E6%B8%B2%E6%9F%93)