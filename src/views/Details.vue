<!--
 * @Description: 商品详情页面组件
 * @Author: leixiaotian
 * @Date: 2021-02-01 20:20:26
 -->
<template>
  <div id="details">
    <!-- 头部 -->
    <div class="page-header">
      <div class="title">
        <p>{{productDetails.name}}</p>
        <div class="list">
          <ul>
            <li>
              <router-link to>概述</router-link>
            </li>
            <li>
              <router-link to>参数</router-link>
            </li>
            <li>
              <router-link to>用户评价</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 头部END -->

    <!-- 主要内容 -->
    <div class="main">
      <!-- 左侧商品轮播图 -->
      <div class="block">
        <el-carousel height="560px" v-if="productPicture.length>1">
          <el-carousel-item v-for="item in productPicture" :key="item.index">
            <img style="height:560px;" :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
        <div v-if="productPicture.length==1">
          <img
            style="height:560px;"
            :src="productPicture[0]"
            alt=""
          />
        </div>
      </div>
      <!-- 左侧商品轮播图END -->

      <!-- 右侧内容区 -->
      <div class="content">
        <h1 class="name">{{productDetails.name}}</h1>
        <p class="intro">{{productDetails.subTitle}}</p>
        <p class="store">小米自营</p>
        <div class="price">
          <span>{{productDetails.price}}元</span>
          <span
            v-show="productDetails.originalPrice != productDetails.price"
            class="del"
          >{{productDetails.originalPrice}}元</span>
        </div>
        <div class="pro-list">
          <span class="pro-name">{{productDetails.name}}</span>
          <span class="pro-price">
            <span>{{productDetails.price}}元</span>
            <span
              v-show="productDetails.originalPrice != productDetails.price"
              class="pro-del"
            >{{productDetails.originalPrice}}元</span>
          </span>
          <p class="price-sum">总计 : {{productDetails.price}}元</p>
        </div>
        <!-- 内容区底部按钮 -->
        <div class="button">
          <el-button class="shop-buy" :disabled="dis" @click="addShoppingBuy">立即购买</el-button>
          <el-button class="shop-cart" :disabled="dis" @click="addShoppingCart">加入购物车</el-button>
          <el-button class="like" @click="addCollect">喜欢</el-button>
        </div>
        <!-- 内容区底部按钮END -->
        <div class="pro-policy">
          <ul>
            <li>
              <i class="el-icon-circle-check"></i> 小米自营
            </li>
            <li>
              <i class="el-icon-circle-check"></i> 小米发货
            </li>
            <li>
              <i class="el-icon-circle-check"></i> 7天无理由退货
            </li>
            <li>
              <i class="el-icon-circle-check"></i> 7天价格保护
            </li>
          </ul>
        </div>
      </div>
      <!-- 右侧内容区END -->
    </div>
    <!-- 主要内容END -->
    <div class="detail-banner">
      <div class="container">
        <ul>
          <li  class="active"><a stat_exposure="true">商品详情</a></li>
          <li  class=""><a stat_exposure="true">规格参数</a></li>
          <li class=""><a stat_exposure="true">常见问题</a></li>
        </ul>
      </div>
    </div>
     <!-- 内容详情区 -->
      <div class="detail" v-html="productDetails.detailHtml">
          
      </div>
      <!-- 内容详情区END -->
  </div>
</template>
<script>
import request from '@/utils/request'
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dis: false, // 控制“加入购物车按钮是否可用”
      productID: "", // 商品id
      productDetails: "", // 商品详细信息
      productPicture: "" // 商品图片
    };
  },
  // 通过路由获取商品id
  activated() {
    if (this.$route.query.productID != undefined) {
      this.productID = this.$route.query.productID;
    }
  },
  watch: {
    // 监听商品id的变化，请求后端获取商品数据
    productID: function(val) {
      this.getDetails(val);
      // this.getDetailsPicture(val);
    }
  },
  methods: {
    ...mapActions(["unshiftShoppingCart", "addShoppingCartNum"]),
    // 获取商品详细信息
    // getDetails(val) {
    //   this.$axios
    //     .post("/api/product/getDetails", {
    //       productID: val
    //     })
    //     .then(res => {
    //       this.productDetails = res.data.Product[0];
    //     })
    //     .catch(err => {
    //       return Promise.reject(err);
    //     });
    // },
    // 获取商品图片
    getDetailsPicture(val) {
      this.$axios
        .post("/api/product/getDetailsPicture", {
          productID: val
        })
        .then(res => {
          this.productPicture = res.data.ProductPicture;
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },
    // 获取商品详细信息
     getDetails(val) {
      request.get('product/detail/'+val).then((res) => {
        const { code, data } = res
        if (code === 200) {
          this.productDetails = res.data.product;
          this.productPicture = res.data.product.albumPics.split(',')
          // console.log("piclist",this.productPicture)// ["1", "2"]
          // this.product = data;
          // this.total = data.length;
          console.log("data is:",data)
        }
      })
    },
    // 加入购物车
    addShoppingCart() {
      // 判断是否登录,没有登录则显示登录组件
      if (!this.$store.getters.getUser) {
        this.$store.dispatch("setShowLogin", true);
        return;
      }
      // const params = new URLSearchParams()
      // params.append('id', this.productDetails.id)
      // params.append('name', this.productDetails.name)
      const params = {
        memberId: 1,
        productId: this.productDetails.id,
        productSkuId: 10,
        quantity: 1,
        price: this.productDetails.price,
        productPic: this.productDetails.pic,
        productName: this.productDetails.name,
        productSubTitle: this.productDetails.subTitle,
        productSkuCode: "202002210036001",
        productSn: this.productDetails.productSn,
      }
      request.post('/cart/add', params).then((res) => {
        const { code, data, message } = res
        if (code === 200) {
          // 隐藏登录组件
            this.isLogin = false;
            // 登录信息存到本地
            //let user = JSON.stringify(data.token);
            //localStorage.setItem("user", user);
            // 登录信息存到vuex
            //this.setUser(data.token);
            // 弹出通知框提示登录成功信息
            this.notifySucceed(message);
            console.log("cart add res is:",data)
        }else {
            // 清空输入框的校验状态
            this.$refs["ruleForm"].resetFields();
            // 弹出通知框提示登录失败信息
            this.notifyError(message);
        }
      })

      // this.$axios
      //   .post("/api/user/shoppingCart/addShoppingCart", {
      //     user_id: this.$store.getters.getUser.user_id,
      //     product_id: this.productID
      //   })
      //   .then(res => {
      //     switch (res.data.code) {
      //       case "001":
      //         // 新加入购物车成功
      //         this.unshiftShoppingCart(res.data.shoppingCartData[0]);
      //         this.notifySucceed(res.data.msg);
      //         break;
      //       case "002":
      //         // 该商品已经在购物车，数量+1
      //         this.addShoppingCartNum(this.productID);
      //         this.notifySucceed(res.data.msg);
      //         break;
      //       case "003":
      //         // 商品数量达到限购数量
      //         this.dis = true;
      //         this.notifyError(res.data.msg);
      //         break;
      //       default:
      //         this.notifyError(res.data.msg);
      //     }
      //   })
      //   .catch(err => {
      //     return Promise.reject(err);
      //   });
    },
    addCollect() {
      // 判断是否登录,没有登录则显示登录组件
      if (!this.$store.getters.getUser) {
        this.$store.dispatch("setShowLogin", true);
        return;
      }
      this.$axios
        .post("/api/user/collect/addCollect", {
          user_id: this.$store.getters.getUser.user_id,
          product_id: this.productID
        })
        .then(res => {
          if (res.data.code == "001") {
            // 添加收藏成功
            this.notifySucceed(res.data.msg);
          } else {
            // 添加收藏失败
            this.notifyError(res.data.msg);
          }
        })
        .catch(err => {
          return Promise.reject(err);
        });
    }
  }
};
</script>
<style>
/* 头部CSS */
#details .page-header {
  height: 64px;
  margin-top: -20px;
  z-index: 4;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
}
#details .page-header .title {
  width: 1225px;
  height: 64px;
  line-height: 64px;
  font-size: 18px;
  font-weight: 400;
  color: #212121;
  margin: 0 auto;
}
#details .page-header .title p {
  float: left;
}
#details .page-header .title .list {
  height: 64px;
  float: right;
}
#details .page-header .title .list li {
  float: left;
  margin-left: 20px;
}
#details .page-header .title .list li a {
  font-size: 14px;
  color: #616161;
}
#details .page-header .title .list li a:hover {
  font-size: 14px;
  color: #ff6700;
}
/* 头部CSS END */

/* 主要内容CSS */
#details .main {
  width: 1225px;
  height: 560px;
  padding-top: 30px;
  margin: 0 auto;
}
#details .main .block {
  float: left;
  width: 560px;
  height: 560px;
}
#details .el-carousel .el-carousel__indicator .el-carousel__button {
  background-color: rgba(163, 163, 163, 0.8);
}
#details .main .content {
  float: left;
  margin-left: 25px;
  width: 640px;
}
#details .main .content .name {
  height: 30px;
  line-height: 30px;
  font-size: 24px;
  font-weight: normal;
  color: #212121;
}
#details .main .content .intro {
  color: #b0b0b0;
  padding-top: 10px;
}
#details .main .content .store {
  color: #ff6700;
  padding-top: 10px;
}
#details .main .content .price {
  display: block;
  font-size: 18px;
  color: #ff6700;
  border-bottom: 1px solid #e0e0e0;
  padding: 25px 0 25px;
}
#details .main .content .price .del {
  font-size: 14px;
  margin-left: 10px;
  color: #b0b0b0;
  text-decoration: line-through;
}
#details .main .content .pro-list {
  background: #f9f9fa;
  padding: 30px 60px;
  margin: 50px 0 50px;
}
#details .main .content .pro-list span {
  line-height: 30px;
  color: #616161;
}
#details .main .content .pro-list .pro-price {
  float: right;
}
#details .main .content .pro-list .pro-price .pro-del {
  margin-left: 10px;
  text-decoration: line-through;
}
#details .main .content .pro-list .price-sum {
  color: #ff6700;
  font-size: 24px;
  padding-top: 20px;
}
#details .main .content .button {
  height: 55px;
  margin: 10px 0 20px 0;
  display: flex;
}
#details .main .content .button .el-button {
  float: left;
  height: 55px;
  font-size: 16px;
  color: #fff;
  border: none;
  text-align: center;
}
#details .main .content .button .shop-cart {
  width: 340px;
  background-color: #ff6700;
}
#details .main .content .button .shop-cart:hover {
  background-color: #f25807;
}

#details .main .content .button .shop-buy {
  width: 340px;
  background-color: #ff054b;
}
#details .main .content .button .shop-buy:hover {
  background-color: #ff054b;
}

#details .main .content .button .like {
  width: 300px;
  margin-left: 10px;
  background-color: #b0b0b0;
}
#details .main .content .button .like:hover {
  background-color: #757575;
}
#details .main .content .pro-policy li {
  float: left;
  margin-right: 20px;
  color: #b0b0b0;
}
/* 主要内容CSS END */
#details .detail {
  width: 1225px;
  text-align: center;
  margin: 0 auto;
}
#details .detail-banner {
    text-align: center;
    padding: 10px 0;
    background: #fff;
    border-top: 1px solid #ddd;
    
}
#details .detail-banner li {
    width: 168px;
    height: 18px;
    padding: 20px 0;
    line-height: 18px;
    text-align: center;
    font-size: 18px;
    color: #424242;
    display: inline-block;
}
</style>