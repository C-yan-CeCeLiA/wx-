const searchBeh = Behavior({
  data:{
    BookArray:[],
    total:0,
    noneResult:false
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
      if(total == 0){
        this.setData({
          noneResult:true
        })
      }
    },
    hasMore(){
      if(this.data.BookArray.length >= this.data.total){
        return false
      }else{
        return true
      }
    },
    init(){
      this.setData({
        BookArray:[],
        total:0,
        noneResult:false
      })
      // this.BookArray = []
    }
  }


})
export{
  searchBeh
}