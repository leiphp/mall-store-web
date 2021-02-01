# mall-store-web（参考小米商城）

<p align=center>
  <a href="http://mall.100txy.com">
    <img src="https://www.100txy.com/static/images/favicon.ico" alt="雷小天商城" style="width:200px;height:200px">
  </a>
</p>
<p align=center>
   雷小天商城，一个基于微服务架构的前后端分离商城系统
</p>
<p align="center">
<a target="_blank" href="https://github.com/leiphp/mall-store-web">
    	<img src="https://img.shields.io/hexpm/l/plug.svg" ></img>
		<img src="https://img.shields.io/badge/JDK-1.8+-green.svg" ></img>
        <img src="https://img.shields.io/badge/springboot-2.2.2.RELEASE-green" ></img>
<img src="https://img.shields.io/badge/SpringCloud-Hoxton.RELEASE-brightgreen" ></img><img src="https://img.shields.io/badge/vue-2.5.17-green" ></img>
<img src="https://img.shields.io/badge/swagger-3.0.0-brightgreen" ></img>
<img src="https://img.shields.io/badge/mybatis--plus-3.1.2-green" ></img>
</a></p>


[前言](#前言) | [说明](#说明) | [项目介绍](#项目介绍) | [站点演示](#站点演示)  | [项目地址](#项目地址) | [功能模块](#功能模块)| [运行项目](#运行项目) | [页面截图](#页面截图) | [致谢](#致谢)

##  前言

前段时间搞活动在腾讯云买的云服务器一直搁置，没有找到合适的项目。思来想去决定部署一个微服务商城项目，把这个服务器用起来，也把一些项目中用到的知识点串起来实践一下。微服务项目用的是这个**mall-swarm**，这个项目的前端只有小程序，而且现在还没有开源出来，最后决定自己写一个适配**mall-portal**接口的web端项目。

## 说明
> 本项目基于开源[Vue-Store ](https://github.com/hai-27/vue-store)项目做二次开发。

> 本项目前后端分离，前端参考 [小米商城](www.mi.com) 实现，但与小米官方没有关系。

> 本项目已经部署在腾讯云，没有兼容移动端，请使用电脑访问。

> 本项目商城端所有实际消费的商品为测试商品，不做发货处理，请知悉后再支付测试。

> 本项目将不定期持续的更新完善所有界面和功能，如有问题请直接在 Issues 中提。

> 如果觉得这个项目还不错，您可以点右上角 `Star`支持一下， 谢谢！ ^_^



## 项目介绍

雷小天商城( **mall-store-web** )，一个模仿 [小米商城 ](www.mi.com)的电商web项目，服务端采用Spring Cloud Hoxton & Alibaba微服务部署。一个完全为**mall-swarm**微服务项目开发的web商城项目，你不需要改**mall-swarm**的任何代码就可以无缝对接。当然以后会根据个人的需求修改做一些调整，现在目的就是快速对接**mall-portal**所有接口，让它能够跑起来。 

前端包含了11个页面：首页、登录、注册、全部商品、商品详情页、关于我们、我的收藏、购物车、订单结算页面、我的订单以及错误处理页面。  

实现了品牌展示、商品秒杀、商品的展示、商品分类查询、关键字搜索商品、商品详细信息展示、登录、注册、用户购物车、订单结算、用户订单、用户收藏列表以及错误处理功能。

该项目会持续更新，感兴趣的小伙伴可以跳转该仓库 [Star支持](https://github.com/leiphp/mall-store-web) 一下。


## 站点演示

部署环境采用 **2核4G3M** 的服务器，所有服务采用docker容器部署 ，感兴趣的小伙伴可以参点击浏览~

> 【演示前端】：http://shop.100txy.com/
>
> 【演示后端】：http://shop.100txy.com/admin
>
> 【演示账号】：test   123456
>
> 【小程序】待开发~


## 项目地址

目前项目托管在 **Gitee** 和 **Github** 平台上中，欢迎大家 **Star** 和 **Fork** 支持~

- Gitee地址：https://gitee.com/leixiaotain/mall-store-web
- Github地址：https://github.com/leiphp/mall-store-web

## 功能模块

### 登录

页面使用了element-ui的`Dialog`实现弹出蒙版对话框的效果，`登录`按钮设置在App.vue根组件，通过`vuex`中的`showLogin`状态控制登录框是否显示。

这样设计是为了既可以通过点击页面中的按钮登录，也可以是用户访问需要登录验证的页面或后端返回需要验证登录的提示后自动弹出登录框，减少了页面的跳转，简化用户操作。

用户输入的数据往往是不可靠的，所以本项目前后端都对登录信息进行了校验，前端基于element-ui的表单校验方式，自定义了校验规则进行校验。

### 注册

页面同样使用了element-ui的`Dialog`实现弹出蒙版对话框的效果，`注册`按钮设置在App.vue根组件，通过父子组件传值控制注册框是否显示。

用户输入的数据往往是不可靠的，所以本项目前后端同样都对注册信息进行了校验，前端基于element-ui的表单校验方式，自定义了校验规则进行校验。

### 首页

首页主要是对商品的展示，有轮播图展示推荐的商品，分类别对热门商品进行展示。

### 全部商品

全部商品页面集成了全部商品展示、商品分类查询，以及根据关键字搜索商品结果展示。

### 商品详情页

商品详情页主要是对某个商品的详细信息进行展示，用户可以在这里把喜欢的商品加入购物车或收藏列表。

### 我的购物车

购物车采用vuex实现，页面效果参考了小米商城的购物车。

详细实现过程请看：[基于Vuex实现小米商城购物车](https://juejin.im/post/5e660ef9518825490276748a)

### 订单结算

用户在购物车选择了准备购买的商品后，点击“去结算”按钮，会来到该页面。
用户在这里选择收货地址，确认订单的相关信息，然后确认购买。

### 我的收藏

用户在商品的详情页，可以通过点击加入 喜欢 按钮，把喜欢的商品加入到收藏列表。

### 我的订单

对用户的所有订单进行展示。

## 运行项目

**注意：**

- 后端接口地址已经修改为线上的地址，本地运行会直接分为我部署在服务器的后端。
- 为了方便测试，数据库数据没有加密，注册时切记**不要使用自己的常用密码**。
- 如果需要自己运行后端，请修改前端的接口地址**baseURL**为您的服务器地址。
- 秒杀时间倒计时bug，需要修改G:\github-test\vue-store\node_modules\vue2-countdown\lib\vue2-countdown.vue第134行把this.star改成this.current。

```
1. Clone project

git clone https://github.com/leiphp/mall-store-web

2. Project setup

cd vue-store
npm install

3. Compiles and hot-reloads for development

npm run serve

4. Compiles and minifies for production

npm run build
```
## 页面截图

**首页**

![](https://images.gitee.com/uploads/images/2020/0317/154615_cffbacfe_6502229.png "home.png")

**全部商品**

![](https://images.gitee.com/uploads/images/2020/0317/154637_fa50ca7a_6502229.png "goods.png")

**购物车**

![](https://images.gitee.com/uploads/images/2020/0317/154737_f0417e36_6502229.gif "shoppingCart.gif")

**我的收藏**

![](https://images.gitee.com/uploads/images/2020/0317/154717_e2baa55c_6502229.png "collect.png")

**我的订单**

![](https://images.gitee.com/uploads/images/2020/0317/154756_5813ae89_6502229.png "order.png")

**登录**

![](https://images.gitee.com/uploads/images/2020/0317/154814_27bcc9f1_6502229.png "login.png")

**注册**

![](https://images.gitee.com/uploads/images/2020/0317/154827_2399157d_6502229.png "register.png")


## 致谢

项目起初参考了很多开源项目的解决方案，开源不易，感谢分享

- 感谢**hai-27**开源项目：[vue-store](https://github.com/hai-27/vue-store)
- 感谢 **macrozheng** 开源项目：[mall-swarm](https://github.com/macrozheng/mall-swarm)