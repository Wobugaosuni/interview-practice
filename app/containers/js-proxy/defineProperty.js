export default function() {
  // 这是将要被劫持的对象
  const data = {
    name: '',
  }

  function say(name) {
    if (name === '古天乐') {
      console.log('给大家推荐一款超好玩的游戏')
    } else if (name === '渣渣辉') {
      console.log('戏我演过很多,可游戏我只玩贪玩懒月')
    } else {
      console.log('来做我的兄弟')
    }
  }

  Object.keys(data).forEach(item => {
    Object.defineProperty(data, item, {
      get: function() {
        console.log('get')
      },
      set: function(newV) {
        console.log(`大家好，我是${newV}`)
        say(newV)
      }
    })
  })

  data.name = '渣渣辉'
  console.log('data:', data)
}
