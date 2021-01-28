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
        <el-carousel-item v-for="item in carousel" :key="item.id">
          <a target="_blank" :href="item.url"><img style="height:460px;" :src="item.pic" :alt="item.name" /></a>
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
        <div class="phone" v-if="Object.keys(promotionList).length>0">
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
                  <li class="color4">
                    <div class="flashsale-countdown">
                      <div class="round">{{ dateFormat(promotionList.startTime)}} 场</div>
                      <img src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
bWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1
MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j
ZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1
bWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N
OkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy
Qzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF
OEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht
cG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE
cHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf
S48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY
jRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN
JbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL
ijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7
KnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L
bN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc
xDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V
kBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU
Kc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E
cnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ
7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII=" alt="小米闪购">
                      <div class="desc">距离结束还有</div>
                      <count-down v-on:start_callback="countDownS_cb(1)" class="countdown"
                        v-on:end_callback="countDownE_cb(1)"
                        :currentTime= "new Date().getTime()" 
                        :startTime="startTime"
                        :endTime="endTime"
                        :hourTxt="':'" :minutesTxt="':'" :secondsTxt="''"
                        >
                      </count-down>
                     <!-- <div class="countdown clearfix">
                        <span>00</span><i>:</i><span>43</span><i>:</i><span>02</span>
                      </div> -->
                    </div>
                  </li>
                </div>             

                 <div class="flash-promotion-data" v-for="(item,key) in promotionList.productList" :key="item.id">
                  <li :class="'color'+key%5+' product'" v-if="key%5!=4">
                    <a href="//www.mi.com/buy/seckill" target="_blank">
                      <div class="content">
                        <div class="thumb">
                          <img :alt="item.name" width="160" height="160" :src="item.pic" lazy="loaded">
                        </div>
                        <h3 class="title">{{item.name}}</h3>
                        <p class="desc">{{item.subTitle}}</p>
                        <p class="price">
                          <span>{{item.flashPromotionPrice}}</span>元 <del>{{item.originalPrice}}元</del>
                        </p>
                      </div>
                    </a>
                  </li>
                  <li :class="'color'+key%5" v-else>
                    <a href="//www.mi.com/buy/seckill" target="_blank">
                      <div class="content">
                        <div class="thumb">
                          <img :alt="item.name" width="160" height="160" :src="item.pic" lazy="loaded">
                        </div>
                        <h3 class="title">{{item.name}}</h3>
                        <p class="desc">{{item.subTitle}}</p>
                        <p class="price">
                          <span>{{item.flashPromotionPrice}}</span>元 <del>{{item.originalPrice}}元</del>
                        </p>
                      </div>
                    </a>
                  </li>
                </div>
        
              </ul>
            </div>
          </div>
        </div>
        <!-- 秒杀活动END -->

        <!-- 新鲜好物展示区域 -->
        <div class="prolist">
          <div class="box-hd">
            <div class="title">新鲜好物</div>
            <div class="more"><a href="//www.mi.com/a/h/14933.html" target="_blank" class="more-link" stat_exposure="true">查看全部<i data-v-57abdd9a="" class="el-icon-d-arrow-right"></i></a></div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <router-link to>
                <img :src="$target +'public/imgs/accessory/accessory-promo2.png'" />
              </router-link>
            </div>
            <div class="list">
              <NewList :list="newProductList" :isMore="false"></NewList>
            </div>
          </div>
        </div>
        <!-- 新鲜好物展示区域END -->

        <!-- 人气推荐展示区域 -->
        <div class="prolist">
          <div class="box-hd">
            <div class="title">人气推荐</div>
            <div class="more"><a href="//www.mi.com/a/h/14933.html" target="_blank" class="more-link" stat_exposure="true">查看全部<i data-v-57abdd9a="" class="el-icon-d-arrow-right"></i></a></div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <router-link to>
                <img :src="$target +'public/imgs/accessory/accessory-promo2.png'" />
              </router-link>
            </div>
            <div class="list">
              <HotList :list="hotProductList" :isMore="false"></HotList>
            </div>
          </div>
        </div>
        <!-- 人气推荐展示区域END -->

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
import CountDown from 'vue2-countdown'
export default {
  components: {
    CountDown
  },
  data() {
    return {
      value: "", //今天日期
      carousel: "", // 轮播图数据
      brandList: [], //品牌推荐
      promotionList: {}, //秒杀活动
      newProductList: [], // 新鲜好物列表
      hotProductList: [], // 新鲜好物列表
      phoneList: "", // 手机商品列表
      miTvList: "", // 小米电视商品列表
      applianceList: "", // 家电商品列表
      applianceHotList: "", //热门家电商品列表
      accessoryList: "", //配件商品列表
      accessoryHotList: "", //热门配件商品列表
      protectingShellList: "", // 保护套商品列表
      chargerList: "", //充电器商品列表
      applianceActive: 1, // 家电当前选中的商品分类
      accessoryActive: 1, // 配件当前选中的商品分类
      startTime: new Date('2021/01/27 10:00:00').getTime(), //剩余开始时间
      endTime: new Date('2021/01/27 17:50:00').getTime() //剩余结束时间
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
    //获取今天日期
    this.dateToday(),
    // 获取轮播图数据
    // this.$axios
    //   .post("/api/resources/carousel", {})
    //   .then(res => {
    //     this.carousel = res.data.carousel;
    //   })
    //   .catch(err => {
    //     return Promise.reject(err);
    //   });
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
          this.carousel = data.advertiseList  // 获取轮播图数据
          this.brandList = data.brandList     // 获取品牌数据
          this.promotionList = data.homeFlashPromotion // 获取秒杀数据
          var startTimeStr = this.dateFormat(data.homeFlashPromotion.startTime)
          var endtimeStr = this.dateFormat(data.homeFlashPromotion.endTime)
          this.startTime = new Date(this.value+' '+startTimeStr).getTime()
          this.endTime = new Date(this.value+' '+endtimeStr).getTime()
          this.newProductList = data.newProductList // 获取新鲜好物数据
          this.hotProductList = data.hotProductList // 获取人气推荐数据
        }
      })
    },
    //标准时间
    dateFormat(time) {
      var date=new Date(time);
      //var year=date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
      * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
      * */
      //var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
      //var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
      var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
      var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
      //var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
      // 拼接
      // return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      return hours+":"+minutes;
    },
    dateToday() {
      var aData = new Date();
      this.value = aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate();
    },
    countDownS_cb(value) {
      console.log('callBack--'+value+'--开始倒计时结束回调');
    },
    countDownE_cb(value) {
      console.log('callBack--'+value+'--活动剩余倒计时结束回调');
    if(this.endTime <= 0) return
    },
  }
};
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss" scope>
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
  justify-content:flex-start;
  flex-wrap: wrap;
}
.flash-promotion-list .product{
  margin-left:13.7px;
}
.flash-promotion-data{
  margin-bottom: 6px;
}
.flash-promotion-data li {
    width: 234px;
    border-top-width: 1px;
    border-top-style: solid;
    
    text-align: center;
    background: #fff;
    -webkit-transition: all .6s;
    transition: all .6s;
    position: relative;
    list-style: none;
}
.flash-promotion-data .color0 {
  border-color: #2196f3;
  
}
.flash-promotion-data .color1 {
  border-color: #e53935;
}
.flash-promotion-data .color2 {
  border-color: #00c0a5;
}
.flash-promotion-data .color3 {
  border-color: #ffac13;
}
.flash-promotion-data .color4 {
  border-color: #ec0bbc;
}


.flash-promotion-data li a{
    display: block;
    height: 300px;
    padding-top: 39px;
    position: relative;
}
.box-sd .flash-promotion-data li:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
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
  span {
    width: 46px;
    height: 46px;
    background: #605751;
    color: #fff;
    font-size: 24px;
    line-height: 46px;
    float: left;
  }
  i {
    width: 15px;
    float: left;
    height: 46px;
    line-height: 46px;
    color: #605751;
    font-size: 28px;
    font-style: normal;
  }
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
.prolist {
    .box-bd {
      height: 300px;
      .promo-list {
        float: left;
        height: 300px;
        width: 234px;
      }
      .list {
        float: left;
        height: 300px;
        width: 991px;
      }
    }
}
</style>