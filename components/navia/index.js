// components/navia/navia.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first:Boolean,
    latest:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc:'images/leftw@2x.png',
    leftSrc:'images/left@2x.png',
    disRightSrc:'images/nextw@2x.png',
    rightSrc:'images/next@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event){
      if(!this.properties.latest){
        this.triggerEvent('left', {}, {})
      }
    },
    onRight:function(event){
      if(!this.properties.first){
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
