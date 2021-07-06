// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '©山西晋能电力科技有限公司提供技术支持',
    appInfo:{
      title:"智慧后勤",
      logo:"../../utils/imgs/logo.png"
    }
  },
  onLoad() {
    setTimeout(function(){
      wx.redirectTo({
        url: '/pages/main/main',
      })
    },1500);
  }
})
