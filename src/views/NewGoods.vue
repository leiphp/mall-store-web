<!--
 * @Description: 推荐商品页面组件
 * @Author: leixiaotian
 * @Date: 2021-01-28 16:23:00
 -->
<template>
  <div class="goods" id="goods" name="goods">
    
    <!-- 分类标签 -->
    <!-- <div class="nav">
      <div class="product-nav">
        <el-button type="primary">综合排序</el-button>
        <el-button type="info">热门推荐</el-button>
        <el-button type="info">新品推荐</el-button>
      </div>
    </div> -->
    <!-- 分类标签END -->

    <!-- 主要内容区 -->
    <div class="main">
      <div class="list">
        <NewGoodsList :list="product" v-if="product.length>0"></NewGoodsList>
        <div v-else class="none-product">抱歉没有找到相关的商品，请看看其他的商品</div>
      </div>
      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pageSize"
          :total="total"
          @current-change="currentChange"
        ></el-pagination>
      </div>
      <!-- 分页END -->
    </div>
    <!-- 主要内容区END -->
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      pindex: 0,
      pcategoryList: [],//树结构分类
      categoryList: "", //分类列表
      categoryID: [], // 分类id
      product: "", // 商品列表
      productList: "",
      total: 0, // 商品总量
      pageSize: 15, // 每页显示的商品数量
      currentPage: 1, //当前页码
      activeName: "-1", // 分类列表当前选中的id
      search: "" // 搜索条件
    };
  },
  created() {
    //获取推荐商品
    this.getRecmmendGoods()
  },
  methods: {
    // 返回顶部
    backtop() {
      const timer = setInterval(function() {
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        const speed = Math.floor(-top / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          top + speed;

        if (top === 0) {
          clearInterval(timer);
        }
      }, 20);
    },
    // 页码变化调用currentChange方法
    currentChange(currentPage) {
      this.currentPage = currentPage;
      request.get('/home/newProductList', {
        params: {
          pageSize: this.pageSize,
          pageNum: this.currentPage
        }
      }).then((res) => {
        const { code, data } = res
        if (code === 200) {
          this.product = data.list;
          this.total = data.total;
        //  console.log("data is:",data)
        }
      })
      this.backtop();
    },
     //获取推荐商品内容
     getRecmmendGoods() {
      request.get('/home/newProductList', {
        params: {
          pageSize: this.pageSize,
          pageNum: this.currentPage
        }
      }).then((res) => {
        const { code, data } = res
        if (code === 200) {
          this.product = data.list;
          this.total = data.total;
        //  console.log("data is:",data)
        }
      })
    },
  }
};
</script>

<style scoped>
.goods {
  background-color: #f5f5f5;
}
/* 面包屑CSS */
.el-tabs--card .el-tabs__header {
  border-bottom: none;
}
.goods .breadcrumb {
  height: 50px;
  background-color: white;
}
.goods .breadcrumb .el-breadcrumb {
  width: 1225px;
  line-height: 30px;
  font-size: 16px;
  margin: 0 auto;
}
/* 面包屑CSS END */

/* 分类标签CSS */
.goods .nav {
  background-color: white;
}
.goods .nav .product-nav {
  width: 1225px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
}
.nav .product-nav .title {
  width: 50px;
  font-size: 16px;
  font-weight: 700;
  float: left;
}
/* 分类标签CSS END */

/* 主要内容区CSS */
.goods .main {
  margin: 0 auto;
  max-width: 1225px;
}
.goods .main .list {
  min-height: 650px;
  padding-top: 14.5px;
  margin-left: -13.7px;
  overflow: auto;
}
.goods .main .pagination {
  height: 50px;
  text-align: center;
}
.goods .main .none-product {
  color: #333;
  margin-left: 13.7px;
}
/* 主要内容区CSS END */
.parentcate .eltag{
  margin-right:10px;
}
.parentcate .active {
  color: #409eff;
  border: 1px solid #d9ecff;
}
</style>