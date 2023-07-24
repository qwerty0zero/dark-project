<template>

<section :id="title+'Section'">

<div class="content" :class=color>
    <div class="elipse"></div>
    <div class="elipse"></div>
    <div class="elipse"></div>


    <div class="squareBox">
        <div class="spanBox">
        <span>GAMING</span>
        <span>GAMING</span>
        <span>GAMING</span>
        <span>GAMING</span>
        </div>
    </div>

    <img :src=img alt="" class="scroll">

    <div class="contentBox">
    <div class="textBox">
        <h3 class="scroll bottom">{{ title }}</h3>
        <h4 class="scroll bottom">{{ subTitle }}</h4>
        <p class="price scroll bottom" >${{ price }}.00</p>
        <p class="scroll bottom">{{ text }}</p>
    </div>
    <div class="buttonBox">
        <a class="scroll" href="#">ADD TO CARD</a>
        <a class="scroll" href="#">LOOK MORE</a>
    </div>
</div>
<br>
</div>



</section>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: ["title", "subTitle", "price", "text", "img", "color"],
    methods: {
      reveal: function(){
        var reveals = document.querySelectorAll(".scroll");
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
      }
    },
    mounted(){
         let main = document.getElementById("main")
         window.addEventListener("scroll", this.reveal);
         main.addEventListener("scroll",this.reveal);
         main.addEventListener("load", this.reveal);
    },
    created(){
        this.reveal;
        window.addEventListener("scroll", this.reveal);
        window.addEventListener("load", this.reveal);
    },
     uploated(){
      this.reveal;
      window.addEventListener("scroll", this.reveal);
      window.addEventListener("load", this.reveal);
     },
}
</script>

<style scoped>
.app{
    padding: 0 !important;
}
.content.orange .squareBox, 
.content.orange>.contentBox>.buttonBox>a:first-child,
.content.orange .elipse{
    background-color: #F38615;
}
.content.blue .squareBox, 
.content.blue>.contentBox>.buttonBox>a:first-child,
.content.blue .elipse{
    background-color: #1493FF;
}
.content.green .squareBox, 
.content.green>.contentBox>.buttonBox>a:first-child,
.content.green .elipse{
    background-color: #07C202;
}

.content.blue h4{
    max-width: min-content;
}

section{
    width: 100vw;
    height: 100vh;
    transform: translateX(-40px);
    scroll-snap-align: start;
}
.content{
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    height: 100%;
}

.elipse{
    width: 20vw;
    height: 20vw;
    filter: blur(8vw);
    position: absolute;
    opacity: 0.6;
    animation: pulse 2s infinite;
}
.elipse:nth-child(2){
    right: 0;
}
.elipse:nth-child(3){
    right: 0;
    bottom: 0;
}

@keyframes pulse {
	0% {
		transform: scale(0.9);
	}

	50% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.9);
	}
}



.squareBox, .contentBox, img{
    position: absolute;
    top: 50%;
}



.squareBox{
    padding: 4vw;
    height: 40vw;
    left: 10vw;
    display: flex;
    align-items: center;
    transform: rotate(-90deg) translateX(50%);
    border-radius: 5em;
}

.spanBox{
    font-size: 8vw;
    display: flex;
    flex-direction: column;
    gap: 0.2em;}
.spanBox>span:nth-child(1){
    opacity: 0.2;
}
.spanBox>span:nth-child(2){
    opacity: 0.4;
}
.spanBox>span:nth-child(3){
    opacity: 0.6;
}
.spanBox>span:nth-child(4){
    opacity: 0.8;
}





img{
    max-height: 36vw;
    max-width: 40vw;
    left: 33%;
    transform: translate(-50%, -50%);
    z-index: 2;
}

.contentBox, .textBox{
    display: flex;
    flex-direction: column;
    color: white;
}


.contentBox{
    gap: 6em;
    width: 60vw;
    align-items: flex-end;
    right: 10vw;
    padding: 3em;
    padding-left: 27vw;
    transform: translateY(-50%);

}
.contentBox::after{
    content: "";
    position: absolute;
    left: 0;top: 0;width: 100%;
    height: 100%;
    backdrop-filter: blur(9px);
    box-shadow: 0 15px 25px rgb(0 0 0 / 50%);
    border-radius: 2em;
}


.textBox, .buttonBox{
    z-index: 3;
}




.textBox{
    gap: 1em;
}



p{
    max-width: 500px;
    font-size: 1vw;
    color: white;
}
.price{
    font-size: 2vw;
}
h3{
    font-size: 7.5vw
}
h4{
    font-size: 4.5vw;
}

.buttonBox{
    display: flex;
    gap: 2em;
}

a{
    color: white;
    font-size: 1.3vw;
    padding: 1vw 3vw;
    font-weight: 100;
    border-radius: 5px;

}

@media screen and (max-width:1000px) {
    .squareBox{
    top: 18%;
    transform: rotate(0deg) translateX(0%);
    width: 80vw;
    }
    .spanBox{
     letter-spacing: 7.8vw;
    }
    .contentBox[data-v-48643478] {
    transform: translateY(-105%);
}
.contentBox{
    width: 70vw;
    padding-left: 0;
    padding: 3em;
}
.textBox {
    gap: 1em;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
}
.textBox>h3{
    width: 100%;
}
.textBox h4 {
    padding: 0.5em 0;
    border: unset;
}
.textBox p {
    font-size: 1.4em;
}

.price{
    display: flex;
    align-items: center;
}
.content.blue h4 {
    max-width: max-content;
}
.orange img{
    transform: translate(-50%, -50%) rotate(-1deg);
    top: 57%;
    left: 47%;
    max-width: 75vw;
    max-height: unset;
}
.blue img{ 

    max-height: unset;
    max-width: 49vw;
    left: 33%;
    transform: translate(-50%, -50%);
    z-index: 2;
    top: 58%;
}
.green img{
    max-width: 50vw;
}
}
</style>