<template>
    <div class="home">
        <div class="content">
               <!-- 头部 -->
            <div class="header">
                <div class="text">外卖</div>
                <div class="loaction">
                    <van-icon name="location-o" />
                    <span>json分享</span>
                    <van-icon name="arrow" />
                </div>
            </div>
        <!-- 主要内容区域 -->
        <div class="main">
            <div class="main-bg" >
                <div class="search">
                    <input type="text">
                    <div class="search-text">搜索</div>
                </div>
                <div class="sort">
                    <div class="big-sort">
                        <div v-for=" (item,index) in big_sort" :key="index">
                            
                            <svg class="icon" aria-hidden="ture">
                                <use :xlink:href="`${item.icon}`"></use>
                            </svg>
                            {{item.name}}
                        </div>
                    </div>
                    <div class="small-sort">
                        <div v-for="(item, index) in small_sort" :key="index">
                        <svg class="icon" aria-hidden="ture">
                                <use :xlink:href="`${item.icon}`"></use>
                        </svg>
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
            <van-tabs v-model:active="active" class="van-tabs">
                <van-tab 
                    v-for="(item,index) in content_nav_list"  
                    :key="index" 
                    :title="item.tab">
                    <navlist :navList="item.data"/>
                </van-tab>
            </van-tabs> 
        </div>
        </div>
    </div>
    <Footer/>
</template>
<script>
import Footer from '../../components/Footer.vue'
import {reactive,toRefs,ref} from 'vue'
import Navlist from './components/Navlist.vue'

export default {
    components:{
        Footer,
        Navlist,
    },
    setup(){
        let data = reactive({
            big_sort:[{
                name: "美食",
                icon: "#icon-meishi1"
            },{
                name: "酒店",
                icon: "#icon-jiudian"
            },{
                name: "品牌",
                icon: "#icon-pinpai"
            },{
                name: "打车",
                icon: "#icon-ershouche"
            },{
                name: "知识",
                icon: "#icon-zhishi"
            },{
                name: "外卖",
                icon: "#icon-waimai"
            },],
            small_sort:[{
                name: "美食",
                icon: "#icon-meishi1"
            },{
                name: "酒店",
                icon: "#icon-jiudian"
            },{
                name: "品牌",
                icon: "#icon-pinpai"
            },{
                name: "打车",
                icon: "#icon-ershouche"
            },{
                name: "知识",
                icon: "#icon-zhishi"
            },{
                name: "外卖",
                icon: "#icon-waimai"
            },],
            content_nav_list:[{
                tab:'天天神券',
                data:[
                    {
                        pic:"https://img2.baidu.com/it/u=2322936812,3610114325&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=415",
                        title:"小龙虾",
                        sales:"2828",
                        price:"21240",
                        label:["门店很新，很棒"]
                    }, {
                        pic:"https://img2.baidu.com/it/u=2322936812,3610114325&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=415",
                        title:"小炒肉",
                        sales:"298",
                        price:"24130",
                        label:["门店很新，很棒"]
                    },{
                        pic:"https://img2.baidu.com/it/u=2322936812,3610114325&fm=253&fmt=auto&app=138&f=JPEG?w=610&h=415",
                        title:"蛋糕",
                        sales:"2568",
                        price:"24310",
                        label:["门店很新，很棒"]
                    },
                ]
            },
            {
                tab:'有道',
                data:[
                    {
                        pic:"url",
                        title:"哈哈哈鱼",
                        sales:"288",
                        price:"260",
                        label:["门店很新，很棒"]
                    }, {
                        pic:"url",
                        title:"拉阿拉蕾鱼",
                        sales:"288",
                        price:"2170",
                        label:["门店很新，很棒"]
                    },
                ]
            },
            {
                tab:'pd',
                data:[
                    {
                        pic:"url",
                        title:"都督",
                        sales:"288",
                        price:"2990",
                        label:["门店很新，很棒"]
                    }, {
                        pic:"url",
                        title:"aasg",
                        sales:"28228",
                        price:"2220",
                        label:["门店很新", "很棒"]
                    },
                ]
            },
            {
                tab:'看看吧',
                data:[
                    {
                        pic:"url",
                        title:"ssd",
                        sales:"288",
                        price:"20",
                        label:["门店很新，很棒"]
                    }, {
                        pic:"url",
                        title:"才多少",
                        sales:"288",
                        price:"24210",
                        label:["门店很新，很棒"]
                    },
                ]
            }]
        })
        const active = ref(0)
        return {
            ...toRefs(data),
            active
         } 
    }
}
</script>

<style lang="less" scoped>
.home{
    display: flex;
    flex-flow: column;
    height: 100vh;
    font-size: 12px;
    .content{
        flex: 1;
        overflow-y: auto;
        .header{
          background-image: linear-gradient(#ffc400, #fff);
            display: flex;
            justify-content: space-between;
            align-content: center;
            padding: 20px 20px 40px 20px;
            .text{
                font-size: 20px;
                font-weight: 600;
            }
            .location{
                span{
                    margin: 0 5px 5px;
                    
                }
                font-size: 14px;
            }
        }
        .main{
            margin-top: -10px;
            .main-bg{
                background-image: linear-gradient(#fff, #f5f5f5);
                padding: 10px 20px 0px 20px;
                border-radius: 30px 30px 0 0;
            .search{
                position:relative; 
                input{
                    width:100%;
                    border: 1px solid #ffc400;
                    border-radius: 20px;
                    height: 30px;
                }
            .search-text{
                position: absolute;
                right: -6px;
                top: 1px;
                background: #ffc400;
                border-radius: 16px;
                width: 50px;
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                text-align: center;
            }
            }
            .sort{
                padding: 20px 0;
                .big-sort{
                    display: flex;
                    div{
                        flex:1;
                        display: flex;
                        flex-flow: column;
                        align-items: center;
                        .icon{
                            width: 50px;
                            height: 50px;
                            margin-bottom: 5px;
                        }
                    }
                }
                .small-sort{
                    display: flex;
                    margin-left: 10px;
                    div{
                    flex:1;
                    flex-flow: column;
                    align-content: center;
                }
                    .icon{
                        width: 30px;
                        height: 30px;
                        margin-bottom: 5px;
                        
                    }
                }
            }
            }
            .van-tabs{
                padding: 0 20px 10px ;
            }
            
        }
    }
}
/deep/ .van-tabs{
    border-radius: 10px;
}
</style>