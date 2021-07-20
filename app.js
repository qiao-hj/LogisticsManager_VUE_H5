// app.js
App({
    onLaunch() {
        // 展示本地存储能力
        var that = this;
        // 登录
        wx.login({
            success: res => {
                if (res.code) {
                    var d = that.globalData; //这里存储了appid、secret、token串  
                    wx.request({
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        method: 'post',
                        url: getApp().globalData.api + "/openid",
                        data: { code: res.code },
                        // header: {}, // 设置请求的 header  
                        success: function(res) {
                            var openid = res.data.openid;
                            console.log(openid);
                            wx.setStorageSync('useropenid', openid); //存储openid  
                        }
                    });
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        })

    },
    globalData: {
        // api:"http://192.168.199.103:8080",
        api: "https://hq.yygikpk.cn/dev-api",
        appid: 'wxfb5a6a9b6c320530',
        secret: '48e25f83b10834981dda9741cebf62e1',
    }
})
var appInstance = getApp()