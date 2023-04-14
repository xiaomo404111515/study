import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import 'amfe-flexible'
import router from '@/router/index'
import {Button, Icon, Tab, Tabs,TreeSelect, Stepper} from 'vant'
import 'vant/lib/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'normalize.css'

const app = createApp(App)
// 注册
app.use(router).use(Button).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper)
app.use(VueAwesomeSwiper)
app.mount('#app')

