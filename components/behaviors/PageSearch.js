const searchBeh = Behavior({
  data:{
    BookArray:[],
    total:0
  },
  methods:{
    setMoreData(newBookArray){
      const temp = this.data.BookArray.concat(newBookArray)
      this.setData({
        BookArray:temp
      })
    },
    getCurrentStart(){
      return this.data.BookArray.length
    },
    setTotal(total){
      this.data.total = total
    },
    hasMore(){
      if(this.data.BookArray.length >= this.data.total){
        return false
      }else{
        return true
      }
    }
  }


})
export{
  searchBeh
}