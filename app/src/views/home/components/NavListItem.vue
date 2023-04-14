

<template>
    <div class="item" @click="toStore">
         <img :src="itemContent.pic" alt="">
         <div class="item-right">
                <div class="title">{{ itemContent.title }}</div>
                <div class="salary">{{ itemContent.sales }}</div>
                <div class="price">{{ itemContent.price }}</div>
                <div class="label">
                    <div v-for="(i,index) in itemContent.label" :key="index"> 
                        {{i}}
                    </div>
                    </div>      
         </div>
    </div>
  
</template>
<style scoped lang="less">
.item{
    display: flex;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    img{
        width: 120px;
        height: 120px;
        border-radius: 10px;
        margin-right: 20px;
    }
    .item-right{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    .title{
        font-size: 18px;
    }
    .label{
        display: flex;
        div{
            background-color: #ffc400;
            padding: 2px 5px;
            border-radius: 5px;
        }
        div:not(:first-child){
            margin-left:10px;
        }
       
    }



}
</style>
<script setup type="ts">
import { objectEntries } from '@antfu/utils';
import {reactive, defineProps} from 'vue'
import { useRouter } from 'vue-router';
    // 定义子组件itemContent
    const props = defineProps(['itemContent'])
    // 定义路由
    const router = useRouter()
   // 引入路由
    const toStore = ()=>{
        router.push('/store')
    }
    

</script>   