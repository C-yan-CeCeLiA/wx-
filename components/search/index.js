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
    searching:Boolean
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyKey:[],
    hotList: [],
    BookArray:[],
    off:false,
    q:""
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
    oncancel(event) {
      this.triggerEvent("cancel", {}, {})
    },
    onConfirm(event){
      console.log()
      this.setData({
        off:true
      })
      let word = event.detail.value || event.detail.content;
      
      Ketword.search(word).then((res)=>{
        console.log(res)
        this.setData({
          BookArray:res.books,
          q:word
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
