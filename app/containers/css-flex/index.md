## flex 1 含义

相当于：`flex 1 0 auto`
1: flex-grow 默认0，即使存在剩余空间，也不放大
0: flex-shrink 默认1，空间不够时，缩小
auto: flex-basis 默认auto，在分配多余空间之前，项目占据的主轴空间（main size）

默认是 `flex 0 1 auto`