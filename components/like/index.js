// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type: Boolean,
      value:false,
      observer:function(){

      }
    },
      count:{
        type:Number
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'images/likeicon@2x.png',
    noSrc:'images/No@2x.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      //创建自定义事件
      let like=this.properties.like
      let count=this.properties.count 
      count = like?count-1:count+1
      this.setData({
        count:count,
        like:!like
      })
      //在onLike激活事件 要附带behavior状态
      let behavior = this.properties.like?'like':'cancel'
      this.triggerEvent('like',{
        behavior:behavior
      },{})//第三个参数不能自定义 bubbles composed capturePhase 事件是否冒泡 事件是否可以穿越组件边界 时间是否拥有捕获阶段
    }
  }
})
