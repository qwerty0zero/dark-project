<template>
    <router-link
    :to="`/product/` + this.category + `/` + product.id"
    :class="this.category">
    <div class="card scroll fade" >
    <div class="imgContainer">
        <img :src="require(`@/assets/img/${this.category}/${product.id}.png`)" alt="" >
    </div>
    <div class="contentContainer">
        <h3 class="scroll bottom">  {{ product.name }} <small>{{ product.sub_name }}</small></h3>
        <h2 class="price scroll bottom" >{{ product.price }} $</h2>
        <a href="#" class="buy">Buy Now</a>

    </div>
</div>

</router-link>

</template>
    
    <script>

    export default{
        props: ["product", "category"]
    }
    </script>
    
    <style scoped>
    .card {
      position: relative;
      min-width: 320px;
      max-width: 400px;
      height: 100%;
      background: #191919;
      border-radius: 20px;
      overflow: hidden;
      color: rgba(255, 255, 255, 0.65);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 0.3s;
}


.card:hover{
    color:white;
}

.card::before {
  content: "";
  position: absolute;
  top: -50%;
  width: 100%;
  height: 100%;
  background: #F38615;
  transform: skewY(345deg);
  transition: 0.5s;
}

.card:hover::before {
  top: -70%;
  transform: skewY(390deg);
}

.card::after {
  content: "DARK PROJECT";
  text-wrap: nowrap;
  position: absolute;
  bottom: 20px;
  left: -10px;
  font-weight: 600;
  font-size: 6em;
  color: rgb(255 255 255 / 10%);
}

.imgContainer {
  position: relative;
  width: 100%;
  padding-top: 100px;
  z-index: 1;
}
img{
    width:calc(100% - 20px);
    margin: 0 auto;
    display: block;
    
}
.contentContainer {
    margin-top: 4em;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
}

h3{
    font-size: 3em;
    display: flex;
    gap: 0.2em;
    text-align: center;
}
small{
    font-size: 1rem;
    text-align: left;
}
h2{
    font-size: 2.8em;
    margin-top: 0.5em;
}
 .buy {
  position: relative;
  top: 100px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: #000000;
  text-decoration: none;
  background: #F38615;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.5s;
}

.card:hover  .buy {
  top: -10px;
  opacity: 1;
}

.headphones .imgContainer{
  padding-top: 50px;
}

.headphones .contentContainer {
    margin-top: 0;
    padding: 0 2em;
}

@media screen and (max-width:780px) {
  .card{
    font-size: 6px;
    min-width: unset;
  }
  .card::after {
    left: 22px;
}
.contentContainer{
  margin: 0;
}
.imgContainer {
    padding-top: 50px;
}
}
@media screen and (max-width:630px){
  .card{
    font-size: 10px;
  }
}

    </style>