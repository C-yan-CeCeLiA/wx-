// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   * 
   */
  externalClasses: ['tag-class'],
  options: {
    multipleSlots:true
  },
  properties: {
    text:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    OnClike(event){
      let content = this.properties.text;
      console.log(this.properties.text)
    
      this.triggerEvent('Click',{
        content:content
      },{})
    }
     
  }
})
