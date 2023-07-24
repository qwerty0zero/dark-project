import Main from "@/pages/Main.vue"
import Products from "@/pages/Products.vue"
import Product from "@/pages/Product.vue"
import Contacts from "@/pages/Contacts.vue"
import Delivery from "@/pages/Delivery.vue"
import Downloads from "@/pages/Downloads.vue"
import Payment from "@/pages/Payment.vue"
import Cart from "@/pages/Cart.vue"

import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/products/",
        component: Products
    },
    {
        path: "/products/keyboards",
        component: Products
    },
    {
        path: "/products/headphones",
        component: Products
    },
    {
        path: "/product/keyboards/::id",
        component: Product
    },
    {
        path: "/product/headphones/::id",
        component: Product
    },
    {
        path: "/contacts/",
        component: Contacts
    },
    {
        path: "/delivery/",
        component: Delivery
    },
    {
        path: "/download/",
        component: Downloads
    },
    {
        path: "/payment/",
        component: Payment
    },
    {
        path: "/cart/",
        component: Cart
    }
]

const router = createRouter ({
    routes,
    history: createWebHistory(process.env.BASE_URL),
     scrollBehavior(to, from, savedPosition){
        return savedPosition || {top:0}
        return{top:null,left:null, behavior:null}
     }
    })

export default router;







