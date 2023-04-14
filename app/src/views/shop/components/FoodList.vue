<template>
<div class="food-list" v-if="index===0">
    <van-tree-select
        v-model:main-active-index="data.activeIndex"
        height="88vw"
        :items="data.items"
        >
        <template #content>
        <div>
            <foodListItem :item="foodData"/>
        </div>
        </template>
    </van-tree-select>
</div>
<div v-else>
    {{ index }}
</div>
</template>

<script setup type="ts">
import { reactive } from "vue"
import foodListItem from './FoodListItem.vue'
    const props = defineProps(['index', 'foodData','foodListItem'])
    const data = reactive({
        activeIndex: 0,
        items:[
            {text:'分組1'},
            {text:'分組2'},
            {text:'分組3'}
        ],
    })
    // 初始化数据
    const initData = () => {
        let newArray = [];
        props.foodData?.items?.forEach((item, index)=> {
            newArray.push({
                text: item.text
            })
        });
        data.items = newArray;
    };
    const tmp = initData()
    </script>


