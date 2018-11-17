// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:String,
    latest:Boolean,
    first:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    lyesSrc:"./images/triangle@left.png",
    lnoSrc:"./images/triangle.dis@left.png",
    ryesSrc:"./images/triangle@right.png",
    rnoSrc:"./images/triangle.dis@right.png",
    
  },
  
 
  /**
   * 组件的方法列表
   */
  methods: {
    onRight:function(){
      if(!this.properties.frist){
        this.triggerEvent("right",{},{})
      }
    },
    onLeft:function(){
      if(!this.properties.latest){
        this.triggerEvent("left", {}, {})
      }
    }
  }
})
