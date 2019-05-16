// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'
let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    latest:true,
    first:false,
    test: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // api key AbhC31IG7ruCDp57
  onLoad: function (options) {
    //使用回调函数剥夺了使用return的权利
    classicModel.getLatest((res) => {
      //setData的误区？
      //xml能使用的数据取决于定义在data下的变量，并不是setData设置的变量决定的,他的作用是"数据更新",先把变量添加到data，然后设置res
      this.setData({
        classicData: res //数据绑定
      })
      // console.log(this.data)
    })
    //request 强制异步
    //二次封装 request
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header:{
    //     appkey:"AbhC31IG7ruCDp57"
    //   },
    //   success:(res)=>{
    //     console.log(this.data.test)
    //   }
    // })
  },
  onLike: function (event) {
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //promise 获取 不要滥用
    //promise 可以解决异步嵌套的问题 嵌套发送request 需要三个回调函数 过多的回调函数嵌套 回调地狱
    //处理异步操作 使用回调函数，剥夺了函数里面return的能力 用Promise可以解决 
    // let promise = new Promise((request,reject) => {
    //   wx.request({
    //     url: 'http://bl.7yue.pro/v1/classic/latest',
    //     header:{
    //       appkey:"AbhC31IG7ruCDp57"
    //     },
    //     success:(res)=>{
    //       resolve(res)
    //     }
    //   })
    // });
    // promise.then((res)=>{
    //   console.log(res)
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})