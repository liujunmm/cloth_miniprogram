// pages/component/member/member.js
//获取应用实例
const app = getApp()
let navigationBar
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		canIUse: false,
		userInfo: app.globalData.userInfo,
		hasLogin: app.globalData.hasLogin
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		if(wx.getUserProfile){
			this.setData({
				canIUse : true
			})
		}
		wx.showLoading({
			title: '检查登录...',
			mask: true
		});
		let that = this;
		// 查看是否授权
		wx.getSetting({
			success: function(res) {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserProfile 获取头像昵称
					let userInfo = wx.getStorageSync('userInfo')
					if(userInfo.nickName){
						app.globalData.hasLogin = true
						app.globalData.userInfo = userInfo
						that.setData({
							hasLogin: true,
							userInfo: userInfo
						})
					}
					wx.hideLoading()
				} else {
					wx.hideLoading()
				}
			}
		})
		navigationBar = that.selectComponent("#navigationBar")
	},
	getUserProfile: function() {
		let that = this;
		//开启loading框
		wx.showLoading({
			title: '请求中...',
			mask: true
		});
		wx.getUserProfile({
			desc:"用于完善个人资料",
			success: function(res) {
				that.setData({
					hasLogin: true,
					userInfo: res.userInfo
				})
				app.globalData.hasLogin = true
				app.globalData.userInfo = res.userInfo
				wx.hideLoading()
				//1.存用户信息到本地存储
				wx.setStorageSync('userInfo', res.userInfo)
				wx.hideLoading()
			},
			fail:function(){
				wx.hideLoading()
				//用户按了拒绝按钮
				wx.showModal({
					title: '警告',
					content: '您点击了拒绝授权，将导致部分功能无权限使用!!!',
					showCancel: false,
					confirmText: '好的'
				})
			}
		})
	},
	onPageScroll: function (e) {
		var scrollTop = e.scrollTop
		navigationBar.setOpacity(scrollTop,200)
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
	goaddress:function(){
		wx.navigateTo({
			url:'/pages/address/address'
		})
	},
	gocollect:function(){
		wx.navigateTo({
			url:'/pages/collect/collect'
		})
	},
	gohistory:function(){
		wx.navigateTo({
			url:'/pages/history/history'
		})
	},
	gocoupon:function(){
		wx.navigateTo({
			url:'/pages/coupon/coupon'
		})
	},
	goservice:function(){
		wx.navigateTo({
			url:'/pages/service/service'
		})
	},
	gohelper:function(){
		wx.navigateTo({
			url:'/pages/helper/helper'
		})
	},
	gofeedback:function(){
		wx.navigateTo({
			url:'/pages/feedback/feedback'
		})
	},
	gosetting:function(){
		wx.navigateTo({
			url:'/pages/setting/setting'
		})
	},
	gomyorder:function(){
		wx.navigateTo({
			url:'/pages/myorder/myorder'
		})
	}
})
