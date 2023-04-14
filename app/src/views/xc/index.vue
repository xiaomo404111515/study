<template>
<!-- 搜索栏 -->
<div class="search">
    <div type="text" class="search-input">
        <span  class="search-icon">
            <van-icon name="search"/>
        </span>
        <span class="search-holder"> 目的地/酒店/酒店/航班号</span>
    </div>
   <a href="wwww.baidu.com">我 的</a>
</div>
<!-- 焦点栏 -->
<!-- <div class="focus">
    <img src="../../assets/xc/xc.jpg" alt="">
</div> -->
<!-- 局部导航栏 -->
<!-- <div class="local-nav">
    <ul>
        <li v-for="(item,index) in localData.data" :key="index">
            <a href="">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`${item.icon}`"></use>
                </svg>
                <span>{{item.namne}}</span>
            </a>
        </li>
    </ul>
</div> -->
<!-- 主导航栏 -->
<!-- <div class="navigration">
    <div>
        <span>1</span>
    </div>

    <div>
        <span>2</span>
    </div>

    <div>
        <span>3</span>
    </div>
</div> -->
</template>


<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
    max-width: 580px;
    // font: normal 14px/1.5 Tahoma,'Lucida Grande', Verdana, 'Microsoft Yahei', STXihei, hei;
    -webkit-tap-heighlight-color: transparent;

}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.search{
    position: fixed;
    top: 0;
    // 浮动型
    display: flex;
    width: 100%;
    height: 44px; 
    // X轴排列， 不换行
    flex-flow: row nowrap;
    // 对齐方式
    justify-content: center;
    // 居中对齐
    align-items: center;
    background-color: #fff;
    // 左50%
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6px);
    border-bottom: 0.1px solid #ccc;
}

.search-input{
    flex: 1;
    height: 25px;
    border: 0.2px solid #ccc;
    border-radius: 10px;
    font-size: 10px;
    margin-left: 10px;
    background-color: #fcfcfc;
}

.search-icon{
    width: 20px;
    height: 25px;
    line-height: 25px;
    position: absolute;
    text-align: center;
}

.search-icon::after{
    content: "";
    width: 0.1px;
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
    top: 3px;
    background-color: #ccc;
    position: absolute;
}

.search-holder{
   position: absolute;
   height: 25px;
   margin-left:15px;
   line-height: 25px;
   left: 25px;
   font-size: 5px;
   color: #666;
}
.search a{
    text-decoration: none;
    width: 44px ;
    height: 44px;
    font-size: 5px;
    text-align: center;
    color: #2eaae0;
}

.search a::before{
    content: "";
    display: block;
    width: 23px;
    height: 23px;
    background: url(../../assets/xc/悬浮球1.png) no-repeat; 
    background-size: 23px auto;
    margin: 5px auto -1px;
    background-color: pink;
}

.focus{
    width: 100%;

}
.focus img{
    width: 100%;
    height: 88px;
    margin-top: 45px;
}

.local-nav{
    height: 64px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #ccc;
}
.local-nav ul{
   width: 100%;
   display: flex;
   background-color: #fff;
}
.local-nav ul li{
    flex: 1;
    height: 64px;
    font-size: 10px;
    color: #222;
    
}

.local-nav li a{
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 12px;
}
.icon{
   width: 30px;
   height: 30px;
}
</style>

<script setup type="ts">
import { reactive } from "vue";

const localData = reactive({
    data:[{
        namne: '酒店',
        icon:'#icon-huochepiao'
    },{
        namne: '飞机票',
        icon:'#icon-feijipiao'
    },{
        namne: '火车票',
        icon:'#icon-huochepiao'
    },{
        namne: '旅游',
        icon:'#icon-lvyou'
    },{
        namne: '攻略/景点',
        icon:'#icon-gonglve'
    },]
})

</script>