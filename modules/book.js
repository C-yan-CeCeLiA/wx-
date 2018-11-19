import { HTTP } from "../util/http-p.js";
class bookModule extends HTTP{
  getHotList(){
    return this.request("/book/hot_list")
  }
}
export {
  bookModule
}