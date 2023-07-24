<template>
<Header></Header>

<div class="productData" 
:id="productType + '-' + $route.params.id">
<section
v-for="section in productSections"
>


<div :class=section.type
v-if="section.type=='imgSection'"
>
<img :src="require(`@/assets/content/` + productType +`/` + $route.params.id + `/`+section.imgSource+`.png`)" alt=""
class="scroll fade"
>
</div>


<div :class=section.type
v-if="section.type=='imgSectionNarrow'">

<img :src="require(`@/assets/content/` + productType +`/` + $route.params.id + `/`+section.imgSource+`.png`)" alt=""
class="scroll fade">

</div>

<div :class=section.type
v-if="section.type=='textSection'"
>

<h2 class="scroll top">{{ section.title }}</h2>
<p class="scroll bottom">{{ section.text }}</p>

</div>

<div :class=section.type
v-if="section.type=='imageTextSection'"
>
<div class="imgDiv">
    <img :src="require(`@/assets/content/` + productType +`/` + $route.params.id + `/`+section.imgSource+`.png`)" alt=""
class="scroll run-left"
> 
</div>

<div class="textBox">
    <h3 class="scroll right">{{ section.title }}</h3>
    <p class="scroll right">{{ section.text }}</p>
</div>
</div>

<div :class=section.type
v-if="section.type==='imageTextSectionReverse'"
>
<div class="imgDiv">
    <img :src="require(`@/assets/content/` + productType +`/` + $route.params.id + `/`+section.imgSource+`.png`)" alt=""
class="scroll run-right"
>
</div>

<div class="textBox">
    <h3 class="scroll left">{{ section.title }}</h3>
    <p class="scroll left">{{ section.text }}</p>
</div>

</div>

<div :class=section.type
v-if="section.type=='imgSlider'"
>

<img class="scroll fade" :src="require(`@/assets/content/` + productType +`/` + $route.params.id + `/`+section.imgSources[0]+`.png`)" alt="">
<div class="imgBox">
<img class="scroll fade" :src="require(`@/assets/content/` + productType +`/` + $route.params.id + `/`+section.imgSources[1]+`.png`)" alt="">
<img class="scroll fade" :src="require(`@/assets/content/` + productType +`/` + $route.params.id + `/`+section.imgSources[2]+`.png`)" alt="">

</div>

</div>




</section>
<section class="specificationsSection">
<div>
    <h2>SPECIFICATIONS</h2>

</div>
<SpecificationListItem
v-for="el in specsificationArray"
:array=el
></SpecificationListItem>

{{ el }}
</section>
</div>


<Footer></Footer>


<div id="el">{{ productLink }}</div>

</template>

<script>

import SpecificationListItem from "@/components/UI/SpecificationListItem.vue"


export default{
    


    components:[SpecificationListItem],
    components:{
        SpecificationListItem
    },

    data(){
        return{
            productType: '',
            productLink: '',
            productSections : [],
            specsificationArray: [],
            imgArray: []

        }
    },
    methods: {

        addData: function(){
            let path =  this.$route.fullPath.split('/')[this.$route.fullPath.split('/').length-2];

            this.productType = path === "keyboards" ? "keyboardDescription" : 'headphoneDescription'

            this.productSections = require(`@/assets/content/` + this.productType + `/` + this.$route.params.id +`.json`)


            if(path === "keyboards"){
                this.specsificationArray.push(this.productSections[this.productSections.length - 2])
                this.specsificationArray.push(this.productSections[this.productSections.length - 1])

                this.productSections.pop()
                this.productSections.pop()
            } else{
                this.specsificationArray.push(this.productSections[this.productSections.length - 1])
                this.productSections.pop()

            }


        }
    },
    mounted(){ 
        this.addData()
    }
    
}
</script>

<style scoped>

#keyboardDescription-4{
    background-color: #bf2004;
}
#headphoneDescription-1{
    background-color: #bbbcc8;
    color: black;
}
#headphoneDescription-1 p{
    color: black;
}
.imgSection>img{
    width: 100%;
}

.productData{
    display: flex;
    gap: 6em;
    flex-direction: column;
    overflow-x: hidden;
}
.productData>section{
display: flex;
justify-content: center;
}
.imgSectionNarrow{
    display: flex;
    justify-content: center;
}
.imgSectionNarrow>img{
    width: 70%;
}

.textSection{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 960px;
}
h2{
    font-size: 6.2em;
}
h3{
    font-size: 4.6em;
}
p{
    margin-top: 1.8rem;
    font-size: 1.8em;
}
.textSection>h2, .textSection>p{
    text-align: center;
}

.imageTextSection, .imageTextSectionReverse{
    display: flex;
    align-items: center;
    gap: 4em;
    justify-content: space-between;
    max-width: 960px;
}
.imageTextSectionReverse{
    flex-direction: row-reverse;
}
.imageTextSection>.imgDiv, .imageTextSectionReverse>.imgDiv{
    max-width: 400px;
    width: 100%;
    min-width: 50%;
    position: relative;
}
.imageTextSection img, .imageTextSectionReverse img{
    height: 100%;
    position: relative;
}
.textBox{
    max-width: 450px;
    text-align: right;
}
.imageTextSection.Reverse>.textBox{
    text-align: left;

}
.imgSlider{
    display: flex;
    flex-wrap: nowrap;
}
.imgSlider>img{
    width: 66%;
}
.imgBox{
    display: flex;
    flex-direction: column;
}
.imgBox>img{
    width: 100%;
}
.specificationsSection{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 4em;
    padding-top: 50px;
    background-color: black;
}
.specificationsSection>div{
position: relative;
z-index: 3;
 width: 100%;
 margin-bottom: 4em;
}
.specificationsSection h2{
    position: relative;
    z-index: 4;
    color: white;
    background-color: black;
    padding: 0 1em;
    width: fit-content;
    margin: 0 auto;
}
.specificationsSection>div::before{
    position: absolute;
    content: "";
    width: calc(90vw - 20px);
    height: 2px;
    background-color: rgb(255 255 255 / 45%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}

@media screen and (max-width:960px) {
    .productData{
        font-size: 8px;
    }
    .imageTextSection>img,
    .imageTextSectionReverse>img
    {
        width: 50%;
    }
    ul.Main.active{
        height: 470px;
    }
}
@media screen and (max-width:760px) {
    .productData{
        font-size: 6px;
    }
    p{
        font-size: 2.5em;
        margin-top: 1em;
    }
}
@media screen and (max-width:630px) {
    .productData{
        font-size: 6px;
        gap: 8vw;
    }
    p{
        font-size: 2.5em;
        margin-top: 1em;
    }
    .imageTextSection,
    .imageTextSectionReverse
    {
        flex-direction: column-reverse;
    }
    .imageTextSection>img,
    .imageTextSectionReverse>img
    {
        width: 100%;
        max-width: unset;
        padding: 0 10px;
    }
    .textBox[data-v-16ab987b] {
    max-width: unset;
    text-align: center;
}
.specificationsSection>div::before{
        width: 0;height: 0;
    }
}
@media screen and (max-width:480px){

    .specificationsSection h2{
    font-size: 4.2em;
    padding: 0;
}
}

</style> 