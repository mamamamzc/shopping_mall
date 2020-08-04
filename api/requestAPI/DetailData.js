import axios from '../http.js'

const detailData = {
  // 首页banner
  async detail() {
    return await axios
      .get('shop/goodsinfo')
  }
}

export default detailData
