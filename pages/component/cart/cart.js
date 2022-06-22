// pages/component/cart/cart.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		isAllSelect: false,
		totalMoney: 0,
		totalNum:0,
		carts: [{
				id: 1,
				pic: "https://gd3.alicdn.com/imgextra/i3/3616083866/O1CN01H8EZ521eQfmTm4VVQ_!!3616083866.jpg",
				name: "GMT | 牛仔褲 清爽夏天潮流搭配",
				code: 'GMT000001',
				price: '50.00',
				isSelect: false,
				sizeArr: [{
						sizeid: '520',
						color: '绿色',
						size: 'S',
						count: 1,
						price: 50,
						isSelect: false
					},
					{
						sizeid: '521',
						color: '蓝',
						size: 'M',
						count: 2,
						price: 50,
						isSelect: false
					}
				]
			},
			{
				id: 2,
				pic: 'https://gd3.alicdn.com/imgextra/i2/1110650650/O1CN01om7RvN1Gfk27aB7zI_!!1110650650.jpg',
				name: "爱雪2020实拍女装圣诞红甜美雪纺打底衫上衣女",
				code: 'GMT000002',
				isSelect: false,
				price: '52.00',
				sizeArr: [{
					sizeid: '523',
					color: '圣诞红',
					size: '均码',
					count: 10,
					price: 52,
					isSelect: false
				}]
			}
		],
	},
	toBuy: function() {
		wx.navigateTo({
			url: '/pages/confirmorder/confirmorder'
		})
	},
	//勾选事件处理函数  
	switchSelect: function(e) {
		// 获取item项的id，和数组的下标值  
		var Allprice = 0,
			i = 0,
			j=0,
			totalNum = 0,
			hasSelect = 0;
		let id = e.target.dataset.id,
			index = e.target.dataset.index,
			cart = e.target.dataset.cart,
			type = e.target.dataset.type;
		
		//一级商品 1 商品属性 2
		if(type == 1){
			//点击商品的checkbox
			this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
			for(i=0;i<this.data.carts[cart].sizeArr.length;i++){
				this.data.carts[cart].sizeArr[i].isSelect = this.data.carts[index].isSelect
				//选中所有的属性
				if(this.data.carts[index].isSelect){
					this.data.totalMoney = this.data.totalMoney + (this.data.carts[cart].sizeArr[i].price * this.data.carts[cart].sizeArr[i].count);
					totalNum  = totalNum + this.data.carts[cart].sizeArr[i].count;
				}else{
					this.data.totalMoney = this.data.totalMoney - (this.data.carts[cart].sizeArr[i].price * this.data.carts[cart].sizeArr[i].count);
					totalNum  = totalNum - this.data.carts[cart].sizeArr[i].count;
				}
			}
		}else{
			//点击属性的checkbox
			this.data.carts[cart].sizeArr[index].isSelect = !this.data.carts[cart].sizeArr[index].isSelect;
			if(this.data.carts[cart].sizeArr[index].isSelect){
				this.data.totalMoney = this.data.totalMoney + (this.data.carts[cart].sizeArr[index].price * this.data.carts[cart].sizeArr[index].count);
				totalNum  = totalNum + this.data.carts[cart].sizeArr[index].count
			}else{
				this.data.totalMoney = this.data.totalMoney - (this.data.carts[cart].sizeArr[index].price * this.data.carts[cart].sizeArr[index].count);
				totalNum  = totalNum - this.data.carts[cart].sizeArr[index].count
			}
			for(j=0;j<this.data.carts[cart].sizeArr.length;j++){
				if(this.data.carts[cart].sizeArr[j].isSelect){
					hasSelect ++
				}
			}
			this.data.carts[cart].isSelect = hasSelect > 0 ? true : false;
		}
		this.data.totalNum = this.data.totalNum + totalNum;
		//是否全选判断
		for (i = 0; i < this.data.carts.length; i++) {
			for(j=0;j<this.data.carts[i].sizeArr.length;j++){
				Allprice = Allprice + (this.data.carts[i].sizeArr[j].price * this.data.carts[i].sizeArr[j].count);
			}
		}
		if (Allprice == this.data.totalMoney) {
			this.data.isAllSelect = true;
		} else {
			this.data.isAllSelect = false;
		}
		this.setData({
			carts: this.data.carts,
			totalMoney: this.data.totalMoney,
			totalNum: this.data.totalNum,
			isAllSelect: this.data.isAllSelect,
		})
	},
	//全选
	allSelect: function(e) {
		//处理全选逻辑
		let i = 0,
			j = 0;
		if (!this.data.isAllSelect) {
			this.data.totalMoney = 0;
			for (i = 0; i < this.data.carts.length; i++) {
				this.data.carts[i].isSelect = true;
				for(j=0;j<this.data.carts[i].sizeArr.length;j++){
					this.data.carts[i].sizeArr[j].isSelect = true
					this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].sizeArr[j].price * this.data.carts[i].sizeArr[j].count);
					this.data.totalNum = this.data.totalNum + this.data.carts[i].sizeArr[j].count;
				}
			}
		} else {
			for (i = 0; i < this.data.carts.length; i++) {
				this.data.carts[i].isSelect = false;
				for(j=0;j<this.data.carts[i].sizeArr.length;j++){
					this.data.carts[i].sizeArr[j].isSelect = false
				}
			}
			this.data.totalMoney = 0;
			this.data.totalNum = 0;
		}
		this.setData({
			carts: this.data.carts,
			isAllSelect: !this.data.isAllSelect,
			totalNum: this.data.totalNum,
			totalMoney: this.data.totalMoney,
		})
	},
	/* 减数 */
	delCount: function(e) {
		var index = e.target.dataset.index;
		var sizekey = e.target.dataset.sizekey;
		var count = this.data.carts[index].sizeArr[sizekey].count;
		// 商品总数量-1
		if (count > 1) {
			this.data.carts[index].sizeArr[sizekey].count--;
		}
		// 将数值与状态写回  
		this.setData({
			carts: this.data.carts
		});
		this.priceCount();
	},
	/* 加数 */
	addCount: function(e) {
		var index = e.target.dataset.index;
		var sizekey = e.target.dataset.sizekey;
		
		var count = this.data.carts[index].sizeArr[sizekey].count;
		// 商品总数量+1  
		if (count < 500) {
			this.data.carts[index].sizeArr[sizekey].count++;
		}
		// 将数值与状态写回  
		this.setData({
			carts: this.data.carts
		});
		this.priceCount();
	},
	priceCount: function(e) {
		this.data.totalMoney = 0;
		this.data.totalNum = 0;
		for (var i = 0; i < this.data.carts.length; i++) {
			for(var j=0;j<this.data.carts[i].sizeArr.length;j++){
				if (this.data.carts[i].sizeArr[j].isSelect == true) {
					this.data.totalNum = this.data.totalNum + this.data.carts[i].sizeArr[j].count;
					this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].sizeArr[j].price * this.data.carts[i].sizeArr[j].count);
				}
			}
		}
		this.setData({
			totalMoney: this.data.totalMoney,
			totalNum : this.data.totalNum
		})
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

	}
})
