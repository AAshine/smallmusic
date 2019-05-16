// components/epsoide/index.html.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      observer:function(newVal,oldVal,changePath){
        //当改变属性的值，会主动调用observer,有三个参数 被改变后的数值，默认的数值，路径
        //千万不要在observer修改自身属性  
        let val = newVal<10 ? '0'+newVal : newVal
        this.setData({
          _index:val
        })
      }
    }
  },
//wxs 

  /**
   * 组件的初始数据
   */
  data: {
    months:[
      '一月', '二月', '三月', '四月', '五月', '六月','七月','八月','九月','十月','十一月','十二月'
    ],
    year:0,
    month:'',
    _index:''
  },
  attached:function(){
    //组件生命周期函数，在组件实例进入页面节点树时执行
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    this.setData({
      year:year,
      month:this.data.months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
