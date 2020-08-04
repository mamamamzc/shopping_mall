import axios from '../http.js'

const homeData = {
  // 首页banner
  async banner() {
    return await axios
      .get('shop/banner')
  }
}

export default homeData
