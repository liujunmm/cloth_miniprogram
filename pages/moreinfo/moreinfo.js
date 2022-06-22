// pages/moreinfo/moreinfo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		date: '1995-07-12',
		region: ['广东省', '广州市', '海珠区'],
		gender:null,
		picker: ['男', '女'],
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
	PickerChange(e) {
	  console.log(e);
	  this.setData({
	    gender: e.detail.value
	  })
	},
	DateChange(e) {
	  this.setData({
	    date: e.detail.value
	  })
	},
	RegionChange: function(e) {
	  this.setData({
	    region: e.detail.value
	  })
	},
	handlerGobackClick: function() {
		wx.navigateBack()
	},
})
