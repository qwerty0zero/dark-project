<template>
<header ref="header">

<div class="navList">
    <router-link 
    to="/">
        <h1>DARK PROJECT</h1>

    </router-link>
    <div class="btn"></div>
</div>
<div class="linkList center">
    <router-link
    v-for="link in linksList"
    :to=link.link>
    {{ link.title }}
    </router-link>
</div>
<div class="btnList">
    <div class="btn"> 
        <img src="@/assets/img/svg/search.svg" alt="">
    </div>
    <router-link class="btn"
    to="/cart/">
        <img src="@/assets/img/svg/basket.svg" alt="">
    </router-link>
</div>
</header>
</template>

<script>
export default{
    name: "Header",
    data(){
        return{
            linksList: [
                {title: 'Download', link: '/download/' },
                {title: 'Payment', link: '/payment/' },
                {title: 'Delivery', link: '/delivery/' }
            ],
        }
    }

}
</script>

<style scoped>
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    position: fixed;
    color: white;
    width: 100%;
    padding: 2em 4em;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 998;
}
h1{
    font-size: 3.5em;
    color: white;
}
header>div{
    display: flex; 
    gap: 2em;
}
.linkList{
    align-self: flex-start;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.3s;
}
.linkList>a  {
  font-size: 1.6em;
  color: #ffffffa6;
  transition: 0.3s;
  position: relative;
}
.linkList>a::after{
position: absolute;
content:"";
bottom: -0.4em;left: 50%;
transform: translateX(-50%);
width: 0;height: 0.2em;
background-color: white;
transition: 0.3s;
}
.linkList>a:hover{
    color: white;
}
.linkList>a:hover::after{
    width: 100%;
}
@media screen and (max-width:1000px) {
    .linkList{
        transform: translate(-50%, -300%);
    }
}
@media screen and (max-width: 600px){
    header{
        padding: 2em 2em;
    }
}

@media screen and (max-width: 480px){
   h1{
    font-size: 3em;
   }
}
</style>