// pages/home/home.js
Page({
  data: {
    startX: 0
  },

  onLoad() {
    console.log('首页加载')
  },

  takePhoto() {
    wx.showToast({ title: '拍照识别', icon: 'none' })
  },

  chooseFromAlbum() {
    wx.showToast({ title: '相册上传', icon: 'none' })
  },

  goToChat() {
    wx.navigateTo({ url: '/pages/main/main' })
  },

  onTouchStart(e) {
    if (e.touches && e.touches[0]) {
      this.setData({ startX: e.touches[0].clientX })
    }
  },

  onTouchEnd(e) {
    if (e.changedTouches && e.changedTouches[0]) {
      const startX = this.data.startX || 0
      const endX = e.changedTouches[0].clientX
      if (startX - endX > 100) {
        wx.navigateTo({ url: '/pages/main/main' })
      }
    }
  }
})
