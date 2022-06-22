// pages/myorder/myorder.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		TabCur: 1,
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
	tabSelect(e) {
		this.setData({
			TabCur: e.currentTarget.dataset.id
		})
	},
	godetail(e){
		var orderNum = e.currentTarget.dataset.orderNum
		wx.navigateTo({
			url: '/pages/myorderdetail/myorderdetail?orderNum='+orderNum
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
