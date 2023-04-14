<template>
    <div class="mine">
        <div class="content"></div>
      <van-button>点击</van-button>
      <Footer/>
    </div>
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
.mine{
    display: flex;
    flex-flow: column;
    height: 100vh;
    .content{
        flex: 1;
        overflow: auto;
    }
}
</style>