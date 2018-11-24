// components/search/index.js
import {
  keywordModule
} from "../../modules/keyword.js"
const Ketword = new keywordModule();



Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searching:Boolean,
    more:{
      type:Boolean,
      observer:"_load_more"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyKey:[],
    hotList: [],
    BookArray:[],
    off:false,
    q:"",
    total:0,
    loading:false,
  },

  attached(){
    let keyW = Ketword.getHistory()
    const hotWords = Ketword.getHotList()
    this.setData({
      historyKey:keyW
    })
    hotWords.then((res)=>{
      console.log(res)
      this.setData({
        hotList:res.hot
      })
    })

    

  } , /**
   * 组件的方法列表
   */
  methods: {
    _load_more(){
     if(!this.data.q){
       return 
     }
     if(this.data.loading){
       return 
     }
    
      if (this.data.BookArray.length == this.data.total){

        wx.showToast({
          title: '没有更多了',
          icon:"none"
        })
        return
      }
      let length = this.data.BookArray.length;
      this.data.loading = true;
      Ketword.search(this.data.q, length).then(res=>{
       
          
        let tempArray = this.data.BookArray.concat(res.books);
        this.setData({
          BookArray: tempArray
        })
        this.data.loading = false
      
      
       
      })
    },



    oncancel(event) {
      this.triggerEvent("cancel", {}, {})
    },
    onConfirm(event){

      this.setData({
        off:true
      })
      let word = event.detail.value || event.detail.content;
      
      Ketword.search(word).then((res)=>{

        this.setData({
          BookArray:res.books,
          q:word,
          total: res.total
        })
        Ketword.addToHistory(word)
      })

    },
    clear(){
      this.setData({
        off:false,
        q:""
      })
    }
  }
})
