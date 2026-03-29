// pages/main/main.js
Page({
  data: {
    todayWaterCount: 0
  },

  onLoad() {
    console.log('功能页加载')
  },

  takePhoto() {
    wx.showToast({ title: '拍照识别', icon: 'none' })
  },

  chooseFromAlbum() {
    wx.showToast({ title: '相册上传', icon: 'none' })
  },

  goToMyPlants() {
    wx.showToast({ title: '我的花园', icon: 'none' })
  },

  goToSearch() {
    wx.showToast({ title: '搜索植物', icon: 'none' })
  },

  goToHistory() {
    wx.showToast({ title: '识别历史', icon: 'none' })
  },

  goToChat() {
    wx.showToast({ title: 'AI助手', icon: 'none' })
  },

  goToProfile() {
    wx.showToast({ title: '我的', icon: 'none' })
  }
})
