<!--
 * @Description: 关于我们页面组件，未完成
 * @Author: leixiaotian
 * @Date: 2021-01-29 16:23:00
 -->
<template>
  <div class="about" id="about" name="about">
    <div class="about-header">
      <div class="about-title">
        <i class="el-icon-tickets" style="color: #ff6700;"></i>
        关于我们
      </div>
    </div>
    <div class="about-content">
      <MyMarkdown></MyMarkdown>
    </div>
  </div>
</template>
<script>
import MyMarkdown from "../components/MyMarkdown";
export default {
  components: {
    MyMarkdown
  }
};
</script>
<style scoped>
.about {
  background-color: #f5f5f5;
}
.about .about-header {
  height: 64px;
  background-color: #fff;
  border-bottom: 2px solid #ff6700;
}
.about .about-header .about-title {
  width: 1225px;
  margin: 0 auto;
  height: 64px;
  line-height: 64px;
  font-size: 28px;
}
.about .content {
  padding: 20px 0;
  width: 1225px;
  margin: 0 auto;
}
.about .content .goods-list {
  margin-left: -13.7px;
  overflow: hidden;
}
.about .about-content {
  width: 1225px;
  margin: 0 auto;
  background-color: #fff;
}
</style>
