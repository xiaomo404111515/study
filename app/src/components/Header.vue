<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon"/>
        <div class="title">{{title}}</div>
</div>
</template>
<script setup type="ts">
    const props= defineProps(['title'])
</script>

<style lang="less" scoped>
.header{
    background: #fff;
    height: 40px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    .icon{
        left: 10px;
        position: absolute;
    } 
}
</style>