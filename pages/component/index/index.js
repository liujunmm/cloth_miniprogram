//index.js
//获取应用实例
const app = getApp()

Page({
	/* 组件的初始数据 */
	data: {
		host: app.globalData.baseUrl,
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		carouselList: [{
				href: 'JavaScript:;',
				src: '../../../images/banner_1.jpg'
			},
			{
				href: 'JavaScript:;',
				src: '../../../images/banner_2.jpg'
			}

		],
		indicatorDots: false,
		autoplay: true,
		interval: 3000,
		circular: true,
		swiperCurrent: 0,
		showSkeleton: true
	},
	onLoad: function() {
		const that = this;
		setTimeout(() => {     //3S后隐藏骨架屏
			that.setData({
				showSkeleton: false
			})
		}, 3000)
	},
	swiperChange(e) {
		let current = e.detail.current;
		let that = this;
		that.setData({
			swiperCurrent: current,
		})
	},
	//点击了轮播图
	chomeCarouselClick: function(event) {
		var urlStr = event.currentTarget.dataset.url;
		//跳转指定的目标页面
		// wx.navigateTo({
		//   url: 'index'
		// })
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
	godetail: function(e) {
		var goodsId = e.currentTarget.dataset.id
		wx.navigateTo({
			url: '/pages/goodsdetail/goodsdetail?id=' + goodsId
		})
	},
	onReachBottom: function() {
		console.log(1);
		wx.showLoading({
			title: '加载更多'
		})
		var that = this;
		this.getMore(that.data.page);
	},
	getMore: function(page) {
		var that = this;
		if (page == 1) {
			wx.showLoading({
				title: '正在加载数据...'
			})
		}
		setTimeout(function() {
			wx.hideLoading()
		}, 1000)
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {
	
	}
})
