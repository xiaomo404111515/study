import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
    {
        path: '/',
        component:() => import('@/views/home/Home.vue')
    },
    {   
        path: '/home',
        component:() => import('@/views/home/Home.vue')
    },
    {   
        path: '/cart',
        component:()=>import('@/views/cart/Cart.vue')
    },
    {   
        path: '/order',
        component:()=>import('@/views/order/Order.vue')
    },
    {   
        path: '/mine',
        component:()=>import('@/views/mine/Mine.vue')
    },
    {
        path:'/store',
        component:()=>import('@/views/shop/store.vue')
    },
    {
        path:'/test',
        component:()=>import('@/views/test/test.vue')
    },
    {
        path:'/page',
        component:()=>import('@/views/page/index.vue')
    },
    {
        path: '/xc',
        component:()=>import('@/views/xc/index.vue')
    }
    ]
})

export default router