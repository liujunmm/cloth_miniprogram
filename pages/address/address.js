// pages/address/address.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userName: '刘均',
		telNumber: '18316880540',
		provinceName: '广东省',
		cityName: '珠海市',
		countyName: '香洲区',
		detailInfo: '南屏镇环屏二街19号',
		postalCode: null,
		flag:true
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
	//用户选择收货地址
	chooseAddress: function() {
		var that = this;
		if (wx.chooseAddress) {
			wx.chooseAddress({
				success: function(res) {
					console.log(JSON.stringify(res));
					console.log(res);
					that.setData({
						userName: res.userName,
						telNumber: res.telNumber,
						provinceName: res.provinceName,
						cityName: res.cityName,
						countyName: res.countyName,
						detailInfo: res.detailInfo,
						postalCode: res.postalCode,
					})
				},
				fail: function(err) {
					wx.showToast({
						title: '您点击了取消！',
						icon: 'none',
						duration: 2000
					})
				}
			})
		} else {
			wx.showToast({
				title: '当前微信版本不支持chooseAddress！',
				icon: 'none',
				duration: 2000
			})
		}
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
