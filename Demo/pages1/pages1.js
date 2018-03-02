//通过getApp方法 拿到全局应用程序对象
const app = getApp()

Page({

  onLoad () {
    const msg = app.foo()
    console.log(msg)
    console.log(app.data)
    console.log(app.num)
  }

})