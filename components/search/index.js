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
    loadingCenter:false
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
        this._loadOn()
        let length = this.getCurrentStart();
        Ketword.search(this.data.q, length).then(res => {
          this.setMoreData(res.books)
          this._loadOff()
        },()=>{
          this._loadOff()
        })
      }else{
        wx.showToast({
          title: '没有更多了',
          icon:"none"
        })
      }
    },



    oncancel(event) {
      this.init()
      this.triggerEvent("cancel", {}, {})
    },
    onConfirm(event){
     this._LoadingCenter()
      this.setData({
        off:true
      })
      let word = event.detail.value || event.detail.content;
      Ketword.search(word).then((res)=>{
        this._hideLoading()
        this.setMoreData(res.books),
        this.setTotal(res.total)
        this.setData({
          q:word,
        })
        Ketword.addToHistory(word)
      },()=>{
        this._hideLoading();
        wx.showToast({
          title: '遇到个错误，请稍后重试',
          icon:none
        })
      })

    },
    clear(){
      this.setData({
        off:false,
        q:""
      })
      this.init()
    },
    _LoadingCenter(){
      this.setData({
        loadingCenter:true
      })
    },
    _hideLoading(){
      this.setData({
        loadingCenter:false
      })
    },
    _loadOn(){
      this.setData({
        loading:true
      })
    },
    _loadOff(){
      this.setData({
        loading:false
      })
    }

  }
})
