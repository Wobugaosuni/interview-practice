class HashRouter {
  constructor() {
    this.currentUrl = ''
    this.routeObj = {}

    this.refresh = this.refresh.bind(this)

    // 路由操作记录
    this.history = []
    // 当前路由位置的映射
    this.currentIndex = -1
    this.isBack = false
    this.isForward = false

    // 监听路由初始变化
    window.addEventListener('load', this.refresh, false)
    // 监听路由hash变化
    window.addEventListener('hashchange', this.refresh, false)
  }

  // 注入路由
  routes(route, callback) {
    // 保存路由及对应的callback
    this.routeObj[route] = callback
  }

  // hash变化的回调函数
  refresh() {
    this.currentUrl = window.location.hash

    // 如果不是回退和前进，路由push
    if (!this.isBack && !this.isForward) {
      this.currentIndex += 1
      this.history.push(this.currentUrl)
    }

    // 调用函数
    this.routeObj[this.currentUrl]()

    this.isBack = false
    this.isForward = false

    console.log('refresh')
    console.log('currentIndex:', this.currentIndex)
    console.log('history:', this.history)
  }

  // 路由回退
  goBack() {
    if (this.currentIndex > 0) {
      // 可以回退
      this.isBack = true
      const href = this.history[this.currentIndex - 1]
      console.log('href:', href)
      window.location.href = href
      // 回退完，index处理
      this.currentIndex -= 1
    } else {
      console.log('不能回退了，老弟')
    }
  }

  // 路由前进
  goForward() {
    if (this.history.length > 1 && this.currentIndex < this.history.length - 1) {
      // 能前进了
      this.isForward = true
      this.currentIndex += 1
      const href = this.history[this.currentIndex]
      console.log('href:', href)
      window.location.href = href
    } else {
      console.log('不能前进，老弟')
    }
  }
}

export default HashRouter