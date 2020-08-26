App({
  // 生命周期函数

  // 小程序初始化完成时，会执行的生命周期函数
  onLaunch: function () {
    console.log('小程序初始化完成了：onLaunch') 
   //  获取用户信息 异步回调-》
  //  wx.getUserInfo({
    //  数据拿到之后，再进行回调
    //  success:function(res){
      //  console.log(res)
      //  console.log(res.userInfo)
      //  console.log('欢迎你：',res.userInfo.nickName)
    //  }
  //  })
    setTimeout(()=>{
      const err = new Error()
      throw err
    },3000)
  },

//  小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    console.log('界面显示处理：onShow')
  },
// 界面憋隐藏时执行
  onHide: function () {
    console.log('界面憋隐藏时执行：onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('当小程序发生脚本错误：onError')
  }
})
