<template>
    <Header ></Header>
    <main id="main">
        <MainCard
        v-for="(el , index) in cardArray"
        :title=el.title
        :subTitle=el.subTitle
        :price=el.price
        :text=el.text
        :color=el.color
        :img="require('@/assets/img/mainCard/' + index+  '.png')"
        >
        </MainCard> 
    </main>

    <ProductList
    ref="p"
    title="New"
    :productprevireArray=newKeyboard
    category="keyboards"
    >

    </ProductList>

    <ProductList
    title="Top Rateed"
    :productprevireArray=topRated
    category="headphones"
    >

    </ProductList>

    <Footer></Footer>
</template>

<script>

import MainCard from '@/components/UI/MainCard.vue'
import ProductList from '@/components/UI/ProductList.vue'

import productKeyboards from '/src/assets/content/keyboards.json'
import productHeadphones from '/src/assets/content/headphones.json'




export default{
    name: "main-page",
    data(){
        return{
            cardArray: [
                {
                    "title": 'KD87',
                    "subTitle": 'Mechanical Teal', 
                    "price": 300, 
                    "text": 'Provide a detailed and accurate description of the product, including its features, benefits, and specifications. Be sure to highlight any unique selling points that set your product apart from others.',
                    "color": "orange"
                },
                {
                    "title": 'HS1',
                    "subTitle": 'Gaming  Headphone', 
                    "price": 89, 
                    "text": 'High-quality sound transmission and optimal frequency balance are provided by high-quality 53 mm speakers with a sensitivity of 98 dB. And an increased impedance of 45 ohms. A gaming headset can also impress when listening to music or watching a movie - Dark Project HS-1 is an example of this.',
                    "color": "blue"
                },
                {
                    "title": 'ME3',
                    "subTitle": 'Gaming Mouse', 
                    "price": 39, 
                    "text": 'Dark Project ME-3 is an ergonomic gaming mouse with a highly customizable shape, built on the Pixart PMW3360 optical sensor and designed for demanding gamers with medium-sized hands.',
                    "color": "green"
                }
            ],
            newKeyboard: [],
            topRated: productHeadphones
        }
    },
    methods:{
        sortByDate: function(arr , property) {
            let tempArr = [];
        

                arr.sort((a, b) => {
                return new Date (a.property)- new Date (b.property)});

            let length = arr.length -1 ;

            for (let i = 0; i < 3; i++) {
                tempArr.push(arr[length - i])
            }

            return tempArr;
        }
    },
    mounted(){
        this.newKeyboard = this.sortByDate(productKeyboards, "date")
    },
    components() {MainCard, ProductList},
    components: {MainCard, ProductList}
}
</script>

<style scoped>
main{
    overflow-x: hidden;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-snap-stop: always;
    scrollbar-width: 0;
    height: 100vh;
    margin-bottom: 4em;
}
main::-webkit-scrollbar {
  display: none;
}
</style>