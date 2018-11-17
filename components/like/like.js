// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:"images/like.png",
    noSrc:"images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    praise:function(){
      let count = this.properties.count;
      let like = this.properties.like;
      like = !like;
      count = like ? count+1 :count-1;
  
      this.setData({
        like:like,
        count:count
      })
      console.log(count)

      let behavior = this.properties.like ? "like":"canel"
      // 激活自定义事件
      this.triggerEvent("like",{
        behavior:behavior
      },{})
    }
  }
})
