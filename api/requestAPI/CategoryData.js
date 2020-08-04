import axios from '../http.js'

const categoryData = {
  // 商品分类
  async category() {
    return await axios
      .get('shop/category')
  }
}

export default categoryData
