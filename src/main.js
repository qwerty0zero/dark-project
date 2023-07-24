import { createApp } from 'vue'

import App from './App.vue'
import components from "@/components";
import router from '@/router/router'
import onScroll from '@/directive/onScroll'

const app =  createApp(App);

components.forEach(component => {
    app.component(component.name, component);
} )


app 
    .use(router)
    .use(onScroll)
    .mount('#app')

