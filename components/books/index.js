// components/books/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book:Object
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
    onTap(event) {
      let bid = this.properties.book.id
     wx.navigateTo({
       url: `./books_detail/index?bid=${bid}`,
     })
    }
  }
})
