// components/search/index.js
import {
  keywordModule
} from "../../modules/keyword.js"
const Ketword = new keywordModule();

import {searchBeh} from "../behaviors/PageSearch.js"

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [searchBeh],
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
    // BookArray:[],
    off:false,
    q:"",
    // total:0,
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
      let has = this.hasMore()
      if (has){
        this.data.loading = true;
        let length = this.getCurrentStart();
        Ketword.search(this.data.q, length).then(res => {
          this.setMoreData(res.books)
          this.data.loading = false
        })
      }else{
        wx.showToast({
          title: '没有更多了',
          icon:"none"
        })
      }
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
        this.setMoreData(res.books),
        this.setTotal(res.total)
        this.setData({
          q:word,
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
