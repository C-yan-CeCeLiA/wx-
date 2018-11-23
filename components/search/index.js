// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searching:Boolean
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
    oncancel(event) {

      this.triggerEvent("cancel", {}, {})
      // this.setData({
      //   searching:true
      // })
    }
  }
})
