<!--
 * @Description: 首页组件
 * @Author: leixiaotian
 * @Date: 2021-01-25 16:23:00
 -->
<template>
  <div class="home" id="home" name="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
          <img style="height:460px;" :src="$target + item.imgPath" :alt="item.describes" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 轮播图END -->

    <!-- 品牌推荐 -->
    <div class="block">
      <div class="home-brand">
        <ul class="home-brand-list" >
          <div class="home-brand-data" v-for="item in brandList" :key="item.id">
            <li><a target="_blank" href="https://www.mi.com/buy/detail?product_id=10000244"><img :src="item.bigPic" :alt="item.name"></a></li> 
          </div>
        </ul>
      </div>
    </div>
    <!-- 品牌推荐end -->

    <div class="main-box">
      <div class="main">
         <!-- 秒杀活动 -->
        <div class="phone">
          <div class="box-hd">
            <div class="title">秒杀</div>
          </div>
          <div class="box-sd">
            <div class="home-promotion">
              <ul class="flash-promotion-list" >
                <!-- <div class="home-brand-data">
                  <li><a target="_blank" href="https://www.mi.com/buy/detail?product_id=10000244"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a43378b96501d7e227a9018fe2668c5.jpg?w=632&h=340" alt=""></a></li> 
                </div> -->
                <div class="flash-promotion-data">
                  <li>
                    <div class="flashsale-countdown">
                      <div class="round">14:00 场</div>
                      <img src="" alt="小米闪购">
                      <div class="desc">距离结束还有</div>
                      <div class="countdown clearfix">
                        <span>00</span><i>:</i><span>43</span><i>:</i><span>02</span>
                      </div>
                    </div>
                  </li>
                </div>
                 <div class="flash-promotion-data">
                  <li>
                    <a href="//www.mi.com/buy/seckill" target="_blank">
                      <div class="content">
                        <div class="thumb">
                          <img alt="米家激光投影电视 150英寸 白色" width="160" height="160" data-src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a259edf1be7ee1bba9648dd84287b6.png?thumb=1&amp;w=200&amp;h=200" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a259edf1be7ee1bba9648dd84287b6.png?thumb=1&amp;w=200&amp;h=200" lazy="loaded">
                        </div>
                        <h3 class="title">米家激光投影电视 150英寸 白色</h3>
                        <p class="desc">超短焦，在家看巨幕</p>
                        <p class="price">
                          <span>7999</span>元 <del>9999元</del>
                        </p>
                      </div>
                    </a>
                  </li>
                </div>
                 <div class="flash-promotion-data">
                  <li>
                    <a href="//www.mi.com/buy/seckill" target="_blank">
                      <div class="content">
                        <div class="thumb">
                          <img alt="米家激光投影电视 150英寸 白色" width="160" height="160" data-src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a259edf1be7ee1bba9648dd84287b6.png?thumb=1&amp;w=200&amp;h=200" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a259edf1be7ee1bba9648dd84287b6.png?thumb=1&amp;w=200&amp;h=200" lazy="loaded">
                        </div>
                        <h3 class="title">米家激光投影电视 150英寸 白色</h3>
                        <p class="desc">超短焦，在家看巨幕</p>
                        <p class="price">
                          <span>7999</span>元 <del>9999元</del>
                        </p>
                      </div>
                    </a>
                  </li>
                </div>
                 <div class="flash-promotion-data">
                  <li>
                    <a href="//www.mi.com/buy/seckill" target="_blank">
                      <div class="content">
                        <div class="thumb">
                          <img alt="米家激光投影电视 150英寸 白色" width="160" height="160" data-src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a259edf1be7ee1bba9648dd84287b6.png?thumb=1&amp;w=200&amp;h=200" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a259edf1be7ee1bba9648dd84287b6.png?thumb=1&amp;w=200&amp;h=200" lazy="loaded">
                        </div>
                        <h3 class="title">米家激光投影电视 150英寸 白色</h3>
                        <p class="desc">超短焦，在家看巨幕</p>
                        <p class="price">
                          <span>7999</span>元 <del>9999元</del>
                        </p>
                      </div>
                    </a>
                  </li>
                </div>
                 <div class="flash-promotion-data">
                  <li>
                    <a href="//www.mi.com/buy/seckill" target="_blank">
                      <div class="content">
                        <div class="thumb">
                          <img alt="米家激光投影电视 150英寸 白色" width="160" height="160" data-src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a259edf1be7ee1bba9648dd84287b6.png?thumb=1&amp;w=200&amp;h=200" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36a259edf1be7ee1bba9648dd84287b6.png?thumb=1&amp;w=200&amp;h=200" lazy="loaded">
                        </div>
                        <h3 class="title">米家激光投影电视 150英寸 白色</h3>
                        <p class="desc">超短焦，在家看巨幕</p>
                        <p class="price">
                          <span>7999</span>元 <del>9999元</del>
                        </p>
                      </div>
                    </a>
                  </li>
                </div>
                

                <!-- <div class="home-brand-data" v-for="item in brandList" :key="item.id">
                  <li><a target="_blank" href="https://www.mi.com/buy/detail?product_id=10000244"><img :src="item.bigPic" :alt="item.name"></a></li> 
                </div> -->
              </ul>
            </div>
          </div>
        </div>
        <!-- 秒杀活动END -->

        <!-- 手机商品展示区域 -->
        <div class="phone">
          <div class="box-hd">
            <div class="title">手机</div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <router-link to>
                <img :src="$target +'public/imgs/phone/phone.png'" />
              </router-link>
            </div>
            <div class="list">
              <MyList :list="phoneList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        <!-- 手机商品展示区域END -->

        <!-- 家电商品展示区域 -->
        <div class="appliance" id="promo-menu">
          <div class="box-hd">
            <div class="title">家电</div>
            <div class="more" id="more">
              <MyMenu :val="2" @fromChild="getChildMsg">
                <span slot="1">热门</span>
                <span slot="2">电视影音</span>
              </MyMenu>
            </div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <ul>
                <li>
                  <img :src="$target +'public/imgs/appliance/appliance-promo1.png'" />
                </li>
                <li>
                  <img :src="$target +'public/imgs/appliance/appliance-promo2.png'" />
                </li>
              </ul>
            </div>
            <div class="list">
              <MyList :list="applianceList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        <!-- 家电商品展示区域END -->

        <!-- 配件商品展示区域 -->
        <div class="accessory" id="promo-menu">
          <div class="box-hd">
            <div class="title">配件</div>
            <div class="more" id="more">
              <MyMenu :val="3" @fromChild="getChildMsg2">
                <span slot="1">热门</span>
                <span slot="2">保护套</span>
                <span slot="3">充电器</span>
              </MyMenu>
            </div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <ul>
                <li>
                  <img :src="$target +'public/imgs/accessory/accessory-promo1.png'" alt />
                </li>
                <li>
                  <img :src="$target +'public/imgs/accessory/accessory-promo2.png'" alt />
                </li>
              </ul>
            </div>
            <div class="list">
              <MyList :list="accessoryList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        <!-- 配件商品展示区域END -->
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      carousel: "", // 轮播图数据
      brandList: [], //品牌推荐
      phoneList: "", // 手机商品列表
      miTvList: "", // 小米电视商品列表
      applianceList: "", // 家电商品列表
      applianceHotList: "", //热门家电商品列表
      accessoryList: "", //配件商品列表
      accessoryHotList: "", //热门配件商品列表
      protectingShellList: "", // 保护套商品列表
      chargerList: "", //充电器商品列表
      applianceActive: 1, // 家电当前选中的商品分类
      accessoryActive: 1 // 配件当前选中的商品分类
    };
  },
  watch: {
    // 家电当前选中的商品分类，响应不同的商品数据
    applianceActive: function(val) {
      // 页面初始化的时候把applianceHotList(热门家电商品列表)直接赋值给applianceList(家电商品列表)
      // 所以在切换商品列表时判断applianceHotList是否为空,为空则是第一次切换,把applianceList赋值给applianceHotList
      if (this.applianceHotList == "") {
        this.applianceHotList = this.applianceList;
      }
      if (val == 1) {
        // 1为热门商品
        this.applianceList = this.applianceHotList;
        return;
      }
      if (val == 2) {
        // 2为电视商品
        this.applianceList = this.miTvList;
        return;
      }
    },
    accessoryActive: function(val) {
      // 页面初始化的时候把accessoryHotList(热门配件商品列表)直接赋值给accessoryList(配件商品列表)
      // 所以在切换商品列表时判断accessoryHotList是否为空,为空则是第一次切换,把accessoryList赋值给accessoryHotList
      if (this.accessoryHotList == "") {
        this.accessoryHotList = this.accessoryList;
      }
      if (val == 1) {
        // 1为热门商品
        this.accessoryList = this.accessoryHotList;
        return;
      }
      if (val == 2) {
        // 2为保护套商品
        this.accessoryList = this.protectingShellList;
        return;
      }
      if (val == 3) {
        //3 为充电器商品
        this.accessoryList = this.chargerList;
        return;
      }
    }
  },
  created() {
    // 获取轮播图数据
    this.$axios
      .post("/api/resources/carousel", {})
      .then(res => {
        this.carousel = res.data.carousel;
      })
      .catch(err => {
        return Promise.reject(err);
      });
    // 获取各类商品数据
    this.getPromo("手机", "phoneList");
    this.getPromo("电视机", "miTvList");
    this.getPromo("保护套", "protectingShellList");
    this.getPromo("充电器", "chargerList");
    this.getPromo(
      ["电视机", "空调", "洗衣机"],
      "applianceList",
      "/api/product/getHotProduct"
    );
    this.getPromo(
      ["保护套", "保护膜", "充电器", "充电宝"],
      "accessoryList",
      "/api/product/getHotProduct"
    );
    this.getHomeContent()
  },
  methods: {
    // 获取家电模块子组件传过来的数据
    getChildMsg(val) {
      this.applianceActive = val;
    },
    // 获取配件模块子组件传过来的数据
    getChildMsg2(val) {
      this.accessoryActive = val;
    },
    // 获取各类商品数据方法封装
    getPromo(categoryName, val, api) {
      api = api != undefined ? api : "/api/product/getPromoProduct";
      this.$axios
        .post(api, {
          categoryName
        })
        .then(res => {
          this[val] = res.data.Product;
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },
    //获取首页内容
     getHomeContent() {
      const params = new URLSearchParams()
      params.append('pageSize', 10)
      params.append('pageIndex', 1)

      request.get('/home/content', params).then((res) => {
        const { code, data } = res
        if (code === 200) {
          this.brandList = data.brandList
          console.log('response brandList is:', this.brandList)
        }
      })
    },
  }
};
</script>
<style scoped>
@import "../assets/css/index.css";
.home-brand {
  margin-top: 14px;
}
.home-brand-list {
  display:flex;
  justify-content:space-between;
  flex-wrap: wrap;
}
.home-brand-data {
  margin-top: 6px;
}

.home-brand-list li{
   overflow: hidden;
   width: 300px;
}

.home-brand-list li img{
   display: block;
   width: 300px;
   height: 170px;
   -webkit-transition: all 0.5s;
}

.home-brand-list li img:hover{
  opacity: 0.8;
  transform: scale(1.2);
}

.home-promotion {
  
}
.flash-promotion-list {
  display:flex;
  justify-content:space-between;
  flex-wrap: wrap;
}
.flash-promotion-data {
  /* margin-top: 6px; */
}
.flash-promotion-data li {
    width: 234px;
    border-top-width: 1px;
    border-top-style: solid;
    border-color: #00c0a5;
    text-align: center;
    background: #fff;
    -webkit-transition: all .6s;
    transition: all .6s;
    position: relative;
    list-style: none;
}

.flash-promotion-data li a{
    display: block;
    height: 300px;
    padding-top: 39px;
    position: relative;
}
.flashsale-countdown{
    height: 300px;
    padding-top: 39px;
    /* border-top-width: 1px;
    border-top-style: solid;
    border-color: #e53935; */
    background: #f1eded;
    text-align: center;
}
.flashsale-countdown .round{
    font-size: 21px;
    color: #ef3a3b;
    padding-top: 15px;
}
.flashsale-countdown img{
    margin: 25px auto;
}
.flashsale-countdown .desc {
    color: rgba(0,0,0,.54);
    font-size: 15px;
}
.flashsale-countdown .countdown {
    width: 168px;
    margin: 28px auto 0;
}
.flashsale-countdown .countdown span {
    width: 46px;
    height: 46px;
    background: #605751;
    color: #fff;
    font-size: 24px;
    line-height: 46px;
    float: left;
}
.flashsale-countdown .countdown i {
    width: 15px;
    float: left;
    height: 46px;
    line-height: 46px;
    color: #605751;
    font-size: 28px;
    font-style: normal;
}

.flash-promotion-data li a .thumb{
    display: block;
    width: 160px;
    margin: 0 auto 22px;
}
.flash-promotion-data li a .thumb img{
    width: 160px;
    height: 160px;
}
.flash-promotion-data li a .title{
    margin: 0 20px 3px;
    font-size: 14px;
    font-weight: 400;
    text-overflow: ellipsis;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
}
.flash-promotion-data li a .desc{
    height: 18px;
    margin: 0 20px 12px;
    font-size: 12px;
    text-overflow: ellipsis;
    color: #b0b0b0;
    overflow: hidden;
    white-space: nowrap;
}
.flash-promotion-data li a .price{
    margin: 0;
    color: #ff6709;
}
.flash-promotion-data li a .price del {
    color: #b0b0b0;
}
</style>