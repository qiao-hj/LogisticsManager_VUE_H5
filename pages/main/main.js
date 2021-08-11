// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "",
        url: "https://hq.feiyikj.com.cn",
        mainurl: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function(options) {
        var useropenid = wx.getStorageSync('useropenid');
        this.data.openid = useropenid;
        this.setData({ mainurl: this.data.url + "?code=" + this.openid });
    },
    binderror(e) {
        console.log(e.data)
    },
    bindload(e) {
        console.log(e.data)
    }
})