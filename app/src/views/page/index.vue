<template>
    <div class="header">
        <ul>
            <li><van-icon name="cross" class="cross" color='#f3f3f3'/></li>
            <li><img src="../../assets/pageImg/jd.png" alt=""></li>
            <li>下载app，尊享好礼</li>
            <li>立即下载</li>
        </ul>
    </div>
    <div class="search-wrap">
        <div class="search-btn">
            <van-icon name="bars" class="bars"/>
        </div>
        <div class="search">
            <div class="jd-icon"></div>
            <div class="jd-search-icon">
                <van-icon name="search" class="secarh-icon"/>
            </div>
        </div>
        <div class="search-login">登录</div>
    </div>
    <div class="main-content">
        <div class="slider">
            <!--滑动图--> 
            <img src="../../assets/pageImg/1.jpg" alt="">
        </div>
        <div class="brand">
            <div>
                <a href="">
                    <img src="../../assets/pageImg/dangao.jpg" alt="">
                </a>
            </div>
            <div>
                <a href="">
                    <img src="../../assets/pageImg/dangao.jpg" alt="">
                </a>
            </div>
            <div>
                <a href="">
                    <img src="../../assets/pageImg/dangao.jpg" alt="">
                </a>
            </div>
        </div>
    
        <div class="sort">
            <div class="big-sort">
                <span v-for=" (item,index) in data.sort_data" :key="index">
                    <svg class="icon" aria-hidden="ture">
                        <use :xlink:href="`${item.icon}`"></use>
                    </svg>
                    {{item.name}}
                </span>
            </div>  
        </div>
        <div class="news">
            <a href="www.baodi.com">
                <img src="../../assets/pageImg/1.jpg" alt="">
            </a>
            <a href="www.baodi.com">
                <img src="../../assets/pageImg/2.jpg" alt="">
            </a>
            <a href="www.baodi.com">
                <img src="../../assets/pageImg/3.jpg" alt="">
            </a>
        </div>
    </div>
</template>
<script setup type="ts">
 import { reactive } from 'vue';
    const data = reactive({
        title: '11',
        sort_data: [{
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
            }
           ],
        sort_datat: [
        {
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
            }
        ]
    })
</script>
<style>
.news{
    margin-top: 20px;
    
}
.news img{
    width: 100%;
    height: 50px;
}
.news a{
    float: left;
    box-sizing: border-box;
}
.news a:nth-child(1){
    width:50%;
}
.news a:nth-child(n+2){
    width: 25%;
    border-left: 0.5px solid #ccc;
}

.big-sort{
   
    display: flex;  
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    
}

.big-sort span{
    margin-top: 10px;
    align-content: center;
}


.big-sort svg{
    width: 40px;
    height: 40px;
}

.small-sort{
    display: flex;  
    width: 100%;
}
.small-sort div{
    display: flex;
    flex: 1;
    flex-flow: column;
    align-items: center;
}
.small-sort svg{
    width: 40px;
    height: 40px;
}

.main-content{
    width: 100%;
}
.slider img{
    width: 100%;
    height: 150px;
}

.small-sort svg{
   width: 40px;
   height: 40px;
}

.brand div{
    width: 33.33%;
    display: flex; 
    float: left;
}

.brand div img{
    width: 100%
}

.brand{
    border-radius: 5px 5px 0 0;
    overflow: hidden;
}



.search-wrap{
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 10px;
    display: flex;
    position: fixed;
    overflow-y: hidden;
    overflow-x: hidden;
    
}

.search-btn{
    position: absolute;
    width: 40px;
    height: 44px;
    top: 1px;
    left: 15px;
    font-size: 30px;
    color: #f3fef3;
}


.search{
    top: 0;
    left: 0;
    height: 30px;
    line-height: 30px;
    flex: 1;
    margin: 7px 50px;
    border-radius: 15px;
    background-color: #fff;   
    border: 1px solid #333333; 
    position: relative;
}
.jd-icon{
    top: 7px;
    left: 5px;
    width: 20px;
    height: 15px;
    background: url('../../assets/pageImg/searchJd.png') no-repeat;
    background-size: 20px 15px  ;
    position: absolute;
}

.jd-icon::after{

    content: "";
    display: block;
    width: 1px;
    height: 15px;
    top: 0;
    right: -8px;
    background: #ccc;
    position: absolute;
}
.jd-search-icon {
    left: 40px;
    background-color: #fff;  
    position: absolute;
}

.secarh-icon{
    width: 15px;
    height: 15px;
    background: #fff;
}

.search-login{ 
    right: 0;
    width: 40px;
    height: 44px;
    margin-right: 10px;
    text-align: center;
    position: absolute;
}
*{
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
img{
    vertical-align: top;
}
.header ul{
    display: flex;
    height: 45px;
    line-height: 45px;
    width: 100%;  
    background-color: #f3fef3;
    text-align: center;
    list-style: none;
}

.header ul li:nth-child(1){
    width: 8%;
    background: #333333;

}

.cross{
    background: #333333;
}
.header ul li:nth-child(2){
    width: 10%;  
    background: #333333;
}
.header ul li:nth-child(2) img{
    width: 30px;
    height: 30px;
    margin-top: -5px;
    vertical-align: middle;
}
.header ul li:nth-child(3){
    width: 57%; 
    font-size: 10px;
    background: #333333;
}
.header ul li:nth-child(4){
    width: 25%;  
    font-size: 10px;
    size: 10px;
    background: red;
} 
</style>

<script setup type="ts">
</script>