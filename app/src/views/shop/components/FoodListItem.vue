<template>
   <div class="content-item">
        <div class="left"> 
            <img src="../../../assets/dangao.jpg" alt="">
            <div class="text">
                <div class="title"></div>
                <van-stepper />
                <van-icon name="add-o" />
            </div>
        </div>
        <div class="price">

        </div>
   </div>
</template>

<script setup type="ts">
import { ref } from "vue"

    const props= defineProps(['item'])
    const data = []

</script>

<style scoped lang="less">
.content-item{
    margin: 10px;
    display: flex;
    justify-content: space-between;
    .price{
        font-size: 16px;
        font-weight: 600;

    }
    .left{
        display: flex;
        align-items:center;
        flex: 1;
      img{
       margin-left: 10px;
       width: 60px;
       height: 60px;
    }
    }
   
}

</style>