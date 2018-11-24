let searchBehaviors = Behavior({
  data: {
    BookArray:[],
    total:0
  },
  method:{
    setMore(newBookArray) {
      let temp = this.data.BookArray.concat(newBookArray)
      console.log(temp)
      this.setData({
        BookArray: temp
      })
    },
    getCurrentStart() {
      return this.data.BookArray.length
    },
    hasMore() {

      if (this.getCurrentStart >= this.data.total) {
        return false
      }
      return true
    },
    _setTotal(total) {
      this.data.total = total
    }
  }
 
})
export{
  searchBehaviors
}