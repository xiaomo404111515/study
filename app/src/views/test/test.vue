<template>
    <div class="stepper">
        <text >-</text>
        <input type="number" >
        <text>+</text>
    </div>
</template>

<style lang="less" scoped>
 
/*主容器*/
.stepper {
    display: flex;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 3px; 
    width: 80px;
    height: 26px;
    text{
        margin: 0 auto;
        width: 19px;
        line-height: 26px;
        text-align: center;
        float: left;
    }
    input{
        width: 40px;
        height: 100%;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-top: 0px solid;
        float: left;
        text-align: center;
        font-size: 12px;
    }
}
</style>
<script>
</script>