<template>
    <div class="alipay">
        <div v-loading="loading" element-loading-text="跳转中..." class="ali-pay" v-html="alipayHtml">{{alipayHtml}}</div> 
    </div>
    
</template>

<script>
export default {
    name: "Apipay",
    data(){
        return{
            alipayHtml: '',
            loading: true
        }
    },
    mounted() {
        let form = this.$route.query.htmls
        this.alipayHtml = form;
        this.$nextTick(()=> {
            document.forms[0].submit()
        })
    }
}
</script>
<style scoped>
.alipay {
  height: 450px;
}
.alipay .ali-pay {
    padding-top: 300px;
}
</style>
