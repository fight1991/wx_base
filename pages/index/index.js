//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    navList:[
      {
        id:1,
        text:'美食',
        imgSrc:'../../assets/icons/grid-01.png',
      },
      {
        id: 2,
        text: '吃喝',
        imgSrc: '../../assets/icons/grid-02.png',
      }, 
      {
        id: 3,
        text: '玩乐',
        imgSrc: '../../assets/icons/grid-03.png',
      }, 
      {
        id: 4,
        text: '足疗',
        imgSrc: '../../assets/icons/grid-04.png',
      }, 
      {
        id: 5,
        text: 'SPA',
        imgSrc: '../../assets/icons/grid-05.png',
      }, 
      {
        id: 6,
        text: 'KTV',
        imgSrc: '../../assets/icons/grid-06.png',
      }, 
      {
        id: 7,
        text: '健身',
        imgSrc: '../../assets/icons/grid-07.png',
      }, 
      {
        id: 8,
        text: '购物',
        imgSrc: '../../assets/icons/grid-08.png',
      },
      {
        id: 9,
        text: '数码',
        imgSrc: '../../assets/icons/grid-09.png',
      }
    ]
  },
  onLoad() {

  },
  goToDetail(e) {
    console.log(e)
    let { dataset: { id, name } } = e.currentTarget
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&name=${name}`,
    })
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
