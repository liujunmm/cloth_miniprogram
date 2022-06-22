//app.js
App({
	onLaunch: function() {
		this.getSystemInfo()
		// 获取用户信息
		this.getUserProfile()
	},
	globalData: {
		userInfo: {},
		hasLogin: false
	},
	getSystemInfo: function() {
		var that = this
		wx.getSystemInfo({
			success: e => {
				that.globalData.StatusBar = e.statusBarHeight;
				let capsule = wx.getMenuButtonBoundingClientRect();
				if (capsule) {
					that.globalData.Custom = capsule;
					that.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
				} else {
					that.globalData.CustomBar = e.statusBarHeight + 50;
				}
			}
		})
	},
	//获取用户信息
	getUserProfile: function() {
		var that = this
		// 查看是否授权
		wx.getSetting({
			success: function(res) {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserProfile 获取头像昵称
					let userInfo = wx.getStorageSync('userInfo')
					if(userInfo.nickName){
						that.globalData.hasLogin = true
						that.globalData.userInfo = res.userInfo
					}
				}
			}
		})
	}
})
