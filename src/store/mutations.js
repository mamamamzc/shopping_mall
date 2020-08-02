import {
  SET_BANNER_IMAGES
} from './types.js'
export default {
  [SET_BANNER_IMAGES](state, images) {
    state.bannerImages = images
    localStorage.setItem('bannerImages', JSON.stringify(images))
  }
}
