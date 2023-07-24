<template>
<Header>

</Header>

<section>
    <h1 class="scroll top">{{ category }}</h1>
</section>

<Filter></Filter>

<section class="productList">
    <ProductPreview
    v-for="product in products"
    :category=this.category
    :product=product
    ></ProductPreview>
</section>

<Footer></Footer>
</template>

<script>

import Filter from "@/components/Filter.vue";
import ProductPreview from "@/components/ProductPreview.vue";

import productKeyboards from '/src/assets/content/keyboards.json'
import productHeadphones from '/src/assets/content/headphones.json'


export default{
    name: "products-page",
    components(){
        Filter,
        ProductPreview
    },
    data(){
        return{
            category: "",
            products: productKeyboards  
            }
    },
    methods: {
        isCategory: function() {
            this.category = this.$route.fullPath.split("/")[this.$route.fullPath.split("/").length - 1]
             switch(this.category)
                 {

               case "keyboards":
                this.products = productKeyboards;
               break;

               case "headphones" : 
               this.products = productHeadphones;
               break;
                }       
             }
    },
        
    created(){
        this.isCategory()
    },
    mounted(){
        this.isCategory()
    },
    updated(){
        this.isCategory()
    },
    components: {Filter, ProductPreview}
}
</script>

<style scoped>
section{
    margin:  0 auto;
    padding: 5em 0;
}
section>h1{
    font-size: 6vw;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.7em;

}
.productList{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 4em;
}

@media screen and (max-width:1200px){
    .productList{
    display: grid;
    grid-template-columns: 1fr 1fr  ;
    gap: 4em;
}
}
@media screen and (max-width:780px){
    .productList{
        gap: 2em;
    }
}
@media screen and (max-width:630px){
    .productList{
        grid-template-columns: 1fr;
        gap: 4em;
    }
}

</style>