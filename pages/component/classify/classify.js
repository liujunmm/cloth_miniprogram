// pages/component/classify/classify.js
//获取应用实例
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		Custom: app.globalData.Custom,
		TabCur: 0,
		MainCur: 0,
		VerticalNavTop: 0,
		list: [],
		load: true
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		wx.showLoading({
			title: '加载中...',
			mask: true
		});
		let list = [{
			id:0,
			name:'春季热卖'
		},
		{
			id:1,
			name:'品牌墙'
		},
		{
			id:2,
			name:'十三行'
		},
		{
			id:3,
			name:'四季青'
		},
		{
			id:4,
			name:'濮院'
		},
		{
			id:5,
			name:'一年四季'
		},
		{
			id:6,
			name:'春装代卖'
		},
		{
			id:7,
			name:'夏装特卖'
		}];
		this.setData({
			list: list,
			listCur: list[0]
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {
		wx.hideLoading()
	},
	tabSelect(e) {
		this.setData({
			TabCur: e.currentTarget.dataset.id,
			MainCur: e.currentTarget.dataset.id,
			VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
		})
	},
	VerticalMain(e) {
		let that = this;
		let list = this.data.list;
		let tabHeight = 0;
		if (this.data.load) {
			for (let i = 0; i < list.length; i++) {
				let view = wx.createSelectorQuery().select("#main-" + list[i].id);
				view.fields({
					size: true
				}, data => {
					list[i].top = tabHeight;
					tabHeight = tabHeight + data.height;
					list[i].bottom = tabHeight;
				}).exec();
			}
			that.setData({
				load: false,
				list: list
			})
		}
		//如果加上了顶部广告图片 需要加上广告图的高度 模拟是50
		let scrollTop = e.detail.scrollTop + 100+50;
		for (let i = 0; i < list.length; i++) {
			if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
				that.setData({
					VerticalNavTop: (list[i].id - 1) * 50,
					TabCur: list[i].id
				})
				return false
			}
		}
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
	getScancode: function() {
		var _this = this;
		// 允许从相机和相册扫码
		wx.scanCode({
			success: (res) => {
				var result = res.result;
				wx.showModal({
					title: '扫码结果',
					content: result,
					showCancel: false
				})
				// _this.setData({
				// 	result: result,
				// })
			}
		})
	},
	goGoodslist:function(){
		wx.navigateTo({
			url:'/pages/goodslist/goodslist'
		})
	}
})
