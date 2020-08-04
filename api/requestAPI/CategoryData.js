import axios from '../http.js'

const categoryData = {
  // 商品分类
  async banner() {
    return await axios
      .get('shop/category')
  }
}

export default categoryData
