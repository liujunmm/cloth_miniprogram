// pages/goodsdetail/goodsdetail.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		goodsId: '',
		playIndex:null,
		playVideo:false,
		carouselList: [{
			id:10,
			url:'https://cloud.video.taobao.com/play/u/1027599019/p/2/e/6/t/1/258624469098.mp4?appKey=38829',
			type:'video',
			coverUrl:'https://img.alicdn.com/imgextra/i4/1027599019/O1CN01K3Rc2w2GUkiDvWSkB_!!1027599019.jpg'
		},
		{
			id:1,
			url:'https://gd2.alicdn.com/imgextra/i4/3616083866/O1CN01IXtLkw1eQfmTm5NYf_!!3616083866.jpg',
			type:'image'
		},
		{
			id:2,
			url:'https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01H8EZ521eQfmTm4VVQ_!!3616083866.jpg',
			type:'image'
		},
		{
			id:3,
			url:'https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01AGZVDI1eQfmJtfwuj_!!3616083866.jpg',
			type:'image'
		},
		{
			id:4,
			url:'https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01DyFfeG1eQfmRPfVwI_!!3616083866.jpg',
			type:'image'
		},
		{
			id:5,
			url:'https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01770Bu11eQfmT9R0mw_!!3616083866.jpg',
			type:'image'
		}],
		previewArr:[
			'https://gd2.alicdn.com/imgextra/i4/3616083866/O1CN01IXtLkw1eQfmTm5NYf_!!3616083866.jpg',
			'https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01H8EZ521eQfmTm4VVQ_!!3616083866.jpg',
			'https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01AGZVDI1eQfmJtfwuj_!!3616083866.jpg',
			'https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01DyFfeG1eQfmRPfVwI_!!3616083866.jpg',
			'https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01770Bu11eQfmT9R0mw_!!3616083866.jpg',
		],
		indicatorDots: false,
		autoplay: false,
		interval: 3000,
		circular: true,
		swiperCurrent: 0,
		showDialog: false,
		num: 0,
		sizeArr: [{
				id: 1,
				size: 'M',
				stock: '10',
				isSelect: false,
				count: 2
			},
			{
				id: 2,
				size: 'L',
				stock: '20',
				isSelect: true,
				count: 1
			},
			{
				id: 3,
				size: 'XL',
				stock: '5',
				isSelect: true,
				count: 1
			}
		]
	},
	//视频封面背景
	videoPlay: function(e) {
		var curIdx = e.currentTarget.dataset.index;
		// 没有播放时播放视频，自动播放
		if (!this.data.playIndex) {
			this.setData({
				playIndex: curIdx,
				playVideo:true,
				autoplay: false
			})
			var videoContext = wx.createVideoContext('video' + curIdx) //这里对应的视频id
			videoContext.play();
		} else { // 有播放时先将prev暂停，再播放当前点击的current
			var videoContextPrev = wx.createVideoContext('video' + this.data.playIndex)
			if (this.data.playIndex != curIdx) {
				videoContextPrev.pause()
			}
			this.setData({
				playIndex: curIdx,
				autoplay: false,
				playVideo:true,
			})
			var videoContextCurrent = wx.createVideoContext('video' + curIdx)
			videoContextCurrent.play()
		}
	},
	playvideo(e) {
		console.log('播放');
		var state = e.type;
		var that = this;
		if (state == "play") {
			that.setData({
				autoplay: false,
				playVideo:true,
			})
		}
	},
	pausevideo(e) {
		console.log('暂停')
		var state = e.type;
		var that = this;
		if (state == "pause") {
			that.setData({
				autoplay: true,
				playVideo:false,
			})
		}
	},
	endvideo(e){
		console.log('结束')
		var that = this;
		that.setData({
			autoplay: true,
			playVideo:false,
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		var that = this
		that.setData({
			goodsId: options.id
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
	//轮播图预览图片
	previewImg: function(e) {
		var currentUrl = e.currentTarget.dataset.currenturl
		var previewUrls = e.currentTarget.dataset.previewurl
		wx.previewImage({
			current: currentUrl, //必须是http图片，本地图片无效
			urls: previewUrls, //必须是http图片，本地图片无效
		})
	},
	swiperChange(e) {
		var that = this;
		let current = e.detail.current;
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
	/* 减数 */
	delCount: function(e) {
		var index = e.target.dataset.index;
		var count = this.data.sizeArr[index].count;
		// 商品总数量-1
		if (count > 1) {
			this.data.sizeArr[index].count--;
		}
		// 将数值与状态写回  
		this.setData({
			sizeArr: this.data.sizeArr
		});
		console.log("sizeArr:" + this.data.sizeArr);
	},

	/* 加数 */
	addCount: function(e) {
		var index = e.target.dataset.index;
		var count = this.data.sizeArr[index].count;
		// 商品总数量+1  
		if (count < 10) {
			this.data.sizeArr[index].count++;
		}
		// 将数值与状态写回  
		this.setData({
			sizeArr: this.data.sizeArr
		});
		console.log("sizeArr:" + this.data.sizeArr);
	},

	/* 点击加号 */
	bindPlus: function() {
		var num = this.data.num;
		// 不作过多考虑自增1  
		num++;
		// 只有大于一件的时候，才能normal状态，否则disable状态  
		var minusStatus = num < 1 ? true : false;
		// 将数值与状态写回  
		this.setData({
			num: num,
			minusStatus: minusStatus
		});
	},
	/* 输入框事件 */
	bindManual: function(e) {
		var num = e.detail.value;
		// 将数值与状态写回  
		this.setData({
			num: num
		});
	},
	addCart: function() {
		this.setData({
			showDialog: true,
		})
	},
	btnClick(e) {
		console.log(e)
		this.closeDialog()
	},
	goconfirm: function() {
		wx.navigateTo({
			url: '/pages/confirmorder/confirmorder'
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
