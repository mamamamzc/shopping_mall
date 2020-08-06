// 修改数据状态的方法集
import {
  SET_BANNER_IMAGES
} from './types.js'
export default {
  [SET_BANNER_IMAGES](state, images) {
    state.bannerImages = images
    localStorage.setItem('bannerImages', JSON.stringify(images))
  }
}
