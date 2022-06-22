// pages/setting/setting.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userInfo: app.globalData.userInfo,
		hasLogin: app.globalData.hasLogin
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		let that = this;
		// 查看是否授权
		wx.getSetting({
			success: function(res) {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserProfile 获取头像昵称
					let userInfo = wx.getStorageSync('userInfo')
					if(userInfo.nickName){
						that.setData({
							hasLogin: true,
							userInfo: userInfo
						})
					}
				}
			}
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
	gomoreinfo:function(){
		wx.navigateTo({
			url:'/pages/moreinfo/moreinfo'
		})
	},
	handlerGobackClick: function() {
		wx.navigateBack()
	},
	handlerGohomeClick: function() {
		wx.switchTab({
			url: '/pages/component/index/index'
		})
	}
})
