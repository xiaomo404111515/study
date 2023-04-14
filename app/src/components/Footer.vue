<template>
    <div class="footer">
        <div class="item">
            <router-link active-class="nav-color" to="/" class="nav-item">
                <van-icon name="wap-home-o" size="35"/>
                首页
            </router-link>
        </div>
        <div class="item">
            <router-link to="/cart" class="nav-item" active-class="nav-color">
                <van-icon name="cart-o" size="35"/>
                购物车
            </router-link>
        </div>
        <div class="item">
            <router-link to="/order" class="nav-item" active-class="nav-color">
                <van-icon name="orders-o" size="35"/>
                订单
            </router-link>  
        </div>
        <div class="item">
            <router-link to="/mine" class="nav-item" active-class="nav-color">
                <van-icon name="contact" size="35"/>
                我的
            </router-link>
        </div>
    </div>
</template>

<style lang="less" scoped>
.footer{
    display: flex;
    width: 100%;
    background: #fff;
    border-top: 0.5px solid #eee;
    position: fixed;
    bottom: 0;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
    .item{
        flex: 1;
        width: 25%;
        .nav-color{
            background: #fff400;
        }
        .nav-item{
            display: flex;
            flex-flow: column;
            align-items: center;
        }
    }
}
</style>