// components/music/index.js
import { classicBeh } from "../classic-beh.js";
const mMgm = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src:String
  },
  attached(){
    this._monitorSwitch(),

    this._recovorStatus()
  
  },
  /**
   * 组件的初始数据
   */
  data: {
    isPlay:false,
    playSrc:"./images/player@playing.png",
    pauseSrc:"./images/player@waitting.png"
  },
  detached(){
    // mMgm.stop()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(){
     if(!this.data.isPlay){
       console.log("开始播放")
       this.setData({
         isPlay: true
       })
       mMgm.src = this.properties.src
     }else{
       this.setData({
         isPlay:false
       })
       mMgm.pause()
     }
    },
    _recovorStatus:function(){
      if(mMgm.paused){
        this.setData({
          isPlay: false
        })
        return
      }
      if(mMgm.src == this.properties.src){
        this.setData({
          isPlay:true
        })
      }
    },
    _monitorSwitch:function(){
      mMgm.onPlay(()=>{
        this._recovorStatus()
      }),
      mMgm.onPause(()=>{
        this._recovorStatus()
      }),
      mMgm.onStop(()=>{
        this._recovorStatus()
      }),
      mMgm.onEnded(()=>{
        this._recovorStatus()
      })
    }
  }
})
