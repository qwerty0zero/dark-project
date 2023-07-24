<template>

<section class="productList">
    <h3 class="scroll top">{{ title }}</h3>
    <div class="products"
    >
        <ProductPreview
        v-for=" el in productprevireArray"
        :product=el
        :category=category
        >

        </ProductPreview>
    </div>
</section>

</template>

<script>

import ProductPreview from '../ProductPreview.vue';

export default{
    data(){
        return{

        }
    },
    props: ["title", "productprevireArray", "category"],

    components() {ProductPreview},
    components: {ProductPreview}
}
</script>

<style >
.productList{
    margin-bottom: 10em
}
h3{
    font-size: 6em;
    margin: 1em 0;
    margin-left: 1em;
}
.products{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3em;
    max-width: 1250px;
    margin: 0 auto;
}
@media screen and (max-width: 1100px) {
    .products{
        margin: 0 auto;
        justify-content: center;
        grid-template-columns:  1fr 1fr;
    gap: 3em;
    max-width: unset;
}
.products>a>.card{
    max-width: unset;
}
}
@media screen and (max-width: 580px){
 .products{
    grid-template-columns:  1fr ;

 }
}
</style>