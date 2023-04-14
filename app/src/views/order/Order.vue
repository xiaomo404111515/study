<template>
    <div class="order">
        <div class="content"></div>
      <van-button>点击</van-button>
    </div>
    <Footer />
</template>
<script>
import Footer from '../../components/Footer.vue'
export default {
    components:{
        Footer,
    }
}
</script>

<style lang="less" scoped>
.order{
    display: flex;
    flex-flow: column;
    height: 100vh;
    .content{
        flex: 1;
        overflow: auto;
    }
}
</style>