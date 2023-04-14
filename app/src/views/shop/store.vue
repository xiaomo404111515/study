<template>
    <div class="storeDetails">
        <Header title="店铺"/>
        <div class="content">
            <div class="img"> </div>
            <div class="foodSort">
                <div class="name">
                    {{ data.title }}
                    <img :src="data.img" alt="" class="store-img">
                </div>
            </div>
            <van-tabs class="van-tabs">
                <van-tab 
                    v-for="(item,index) in data.storeData"  
                    :key="index" 
                    :title="item.name">
                    <FoodList :index="index" :foodData="item.data"/>
                </van-tab>
            </van-tabs> 
        </div>
    </div>
</template>
<script setup type="ts">
import Header from '@/components/Header.vue'
import {toRef, reactive} from 'vue'
import FoodList from '@/views/shop/components/FoodList.vue'
const props = defineProps(['FoodList'])
const data  = reactive({
    title: '糕点',
    img: 'https://img2.baidu.com/it/u=2322936812,3610114325&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=415',
    storeData: [
        {
            name: '点菜',
            data:{
                content:'点菜',
                items:[
                    {
                    text: '水果',
                    children:[{
                        pic:'https://img2.baidu.com/it/u=2322936812,3610114325&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=415'
                    }]
                },
                {
                    text: '奶茶',
                    children:[{
                        pic:'https://img2.baidu.com/it/u=2322936812,3610114325&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=415'
                    }]
                },
                {
                    text: '生活用品',
                    children:[{
                        pic:'https://img2.baidu.com/it/u=2322936812,3610114325&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=415'
                    }]
                }
            ]
                    
                
            }
        },
        {
            name:'评价',
            data:{
                content: '评价',
                items:[{
                    text: '评价',
                }]
            }
        },
        {
            name:'商家',
            content: '商家'
        }
    ]

})
</script>

<style lang="less" scoped>
.storeDetails{
    height: 100%;
    display: flex;
    flex-flow: column;
    .img{
        background: url('@/assets/dangao.jpg') no-repeat center/cover;
        width: 100%;
        height: 150px;
    }

    .foodSort{
        height: 100px;
        background: #fff;
        margin: -30px 10px 0px 10px;
        border-radius: 10px;
        border: 1px solid #412392;
        .sort{
        margin-top: 10px;
        }
        .name{
            display: flex;
            padding: 20px;
            justify-content: space-between;
        .store-img{
            width: 40px;
            height: 40px;
            margin-top: -18px;
        }}
        .content{
            flex: 1;
            overflow-y: auto;       
        }
}
}
</style>