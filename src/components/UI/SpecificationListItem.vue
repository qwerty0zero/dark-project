<template>
<p
@click="Click()" 
>{{type}}</p>
    <ul
    :class="computedClass"
    >
        <li
        v-for="(el, index) in specs"
        >
       <span>—</span> {{ index }} - {{ el }}
        </li>
    </ul>
</template>

<script>

export default{
    data(){
        return{
            specs: {},
            type: '',
            isClick: false,
            height: 0
        }
    },
    props:["array"],
    mounted(){
        for (let key in this.array){
            if(key!="type"){
                this.specs[key] = this.array[key]
            }
        }
        this.type = Object.values(this.array)[0] === "mainSpecs" ? 'Main' : 'Size'
    },
     methods:{
        Click: function(){
            this.isClick = !this.isClick
        }
     },
     computed:{
        computedClass() {
        let className = this.type;
        className = this.isClick ? className + " active" : this.type;
        return className;
    } 
     }
}
</script>

<style scoped>
p{    
    width: 100%;
    padding: 1em 1.5em;
    border-radius: 5px;
    background-color: #191919;
    font-size: 2.2em;
    cursor:pointer;
    max-width: 800px;
}
li:first-child{
    border-top:0;

}
ul{
    width: 100%;
    padding: 0 1em;
    transition: 0.5s;
    height: 0;
    overflow: hidden;
}
p:last-of-type{
    margin-top:1em;
}
ul.Main.active{
height: 582px;
}
ul.Size.active{
height: 130px;
}
li{
    padding: 1.5em 0;
    border-top:1px solid rgb(255 255 255 / 45%);
    width: 100%;
    font-size: 1.6em;
    color: #737373;
}
li span{
  color:rgb(17, 95, 235);
  margin-right: 1em;
}
</style>
