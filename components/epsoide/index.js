// components/epsoide/index.js
const useChinese =["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      observer:function(newval,oldval){
        console.log(newval);
        let val = newval < 10 ? "0" + newval : newval;
        this.setData({
          _index:val
        })

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    month: useChinese[new Date().getMonth()],
    year: new Date().getFullYear(),
    _index:0
  },
  
  /**
   * 组件的方法列表
   */
  created:function(){
    
  },
  methods: {
    
    
  }
})
