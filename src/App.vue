<template>
        <div class="app">
          <router-view></router-view>
        </div>
</template>

<script>

let url = location.href;

document.body.addEventListener('click', ()=>{
    requestAnimationFrame(()=>{
      if(url!==location.href){
        url = location.href
        reveal()
      }
    });
}, true);


function reveal() {
  let reveals  = document.querySelectorAll(".scroll")

  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = parseInt( reveals[i].getBoundingClientRect().top);

    let elementVisible = 50;

    if (elementTop <parseInt(windowHeight)  - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }


  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


export default{
  
    data(){
        return{
        }
    }

  }

      

</script>

<style>
*, *::after, *::before{
  box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-family: Arial, Helvetica, sans-serif;
	vertical-align: baseline;
  font-size: inherit;
}
a{
  text-decoration: none;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: black;
  color: white;
	font-size: 10px;
  margin-top: 75px;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.app{
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 75px);
  overflow-x: hidden;
}

.scroll{
  transition: 0.5s;
  opacity: 0;
}

.scroll.fade{
  scale: 0.8;
}
.imgSection.scroll.fade{
  scale: 0.9;
}
.scroll.bottom{
  transform: translateY(100%);
}
.scroll.top{
  transform: translateY(-100%);
}
.scroll.left{
  transform: translateX(-100%);
}
.scroll.right{
  transform: translateX(100%);
}
.scroll.run-left{
  width: 10px;
}
.scroll.run-right{
  width: 10px;
}
.scroll.run-left.active{
  width: 100%;
}
.scroll.run-right.active{
  width: 100%;
}
.scroll.active{
  opacity: 1;
}

.scroll.fade.active{
  scale: 1;
}

.scroll.bottom.active, .scroll.top.active,
.scroll.left.active,.scroll.right.active{
  transform: translate(0);
}

</style>
