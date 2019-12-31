class HistoryRouter {
  constructor() {
    this.currentUrl = ''
    this.routeObj = {}

    window.addEventListener('popstate', e => {
      console.log('popstate:', e)
      const path = e.state && e.state.path
      this.routeObj[path] && this.routeObj[path]()
    })
  }

  // 初始化路由
  init(path) {
    history.replaceState({path: path}, null, path)
    this.routeObj[path] && this.routeObj[path]()
  }

  go(path) {
    history.pushState({path: path}, null, path)
    this.routeObj[path] && this.routeObj[path]()
  }

  // 注入路由
  routes(route, callback) {
    // 保存路由及对应的callback
    this.routeObj[route] = callback
  }
}

export default HistoryRouter