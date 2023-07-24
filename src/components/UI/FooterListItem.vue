<template>

<nav class="siteNavigarion"
v-if="!type"
:class="{active: isActive}"
v-on:ready="childReady = true">
                <h4 class="linkBtn scroll top" @click="isClicked()">
                    <router-link
                    :to="`/products/` + title"
                    >
                    {{ title }}
                    </router-link>
                </h4>
            <ul ref="List" :class=title >
                <li v-for="el in list" class=" scroll bottom">
                    <router-link 
                    :to="'/product/' + title + `/` + el.id"
                    v-if="el.sub_name"
                    >
                   {{ el.name }} {{ el.sub_name }}
                    </router-link>

                    <router-link 
                    :to="'/product/' + title + `/` + el.id"
                    v-if="!el.sub_name"
                    >
                   {{ el.name }}
                    </router-link>
                </li>
            </ul>
</nav>

<nav class="siteNavigarion pages"
        v-if="type">
            <ul>
                <li v-for="el in list"
                class=" scroll top">
                    <h4>
                    <router-link
                    :to=el.link
                    >
                    {{el.title}}
                    </router-link>
                </h4>
                </li>
            </ul>
</nav>

</template>

<script>
export default{
    data(){
        return{
            isActive: false,
            listHeight: 0
        }
    },
    props:["title" , "list", "type"],

    methods: {
        isClicked: function() {
            this.isActive =! this.isActive
        }
}
}
</script>

<style >
 a,  form>p {
    color: rgb(255 255 255 / 45%);
    transition: 0.3s;
}
h3{
    font-size: 1.8em;
}
h4>a{
    font-size: 1.4em;
}
 h4>a, p {
    color: #ffffffa6;
    transition: 0.3s;
}

 a:hover,  h4:hover{
    color:white;
}

.siteNavigarion>ul{
    display: flex;
    gap: 0.5em;
    transition: 0.3s;
    flex-direction: column;

}
.siteNavigarion>h4{
    text-transform: capitalize;
    margin-bottom: 0.5em;
}
.siteNavigarion.pages>ul{
    justify-content: space-between;
    height: 100%;
}
@media screen and (max-width:1000px) {
    .List{
    }
    .siteNavigarion>ul{
    height: 0;
    transition: 0.3s;
    overflow:hidden ;
    }
    
    .siteNavigarion.pages>ul{
        height: auto;
        gap: 0;

    }
    .siteNavigarion>h4{
        margin-bottom: 0;
    }
    h4{
        padding: 1em 0;  
        border-bottom: 1px solid rgb(255 255 255 / 45%);
    border-top: 1px solid rgb(255 255 255 / 45%);

      }
      .linkBtn{
        position: relative;
        cursor: pointer;
      }
    
      .linkBtn::after{
        content: "+";
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 1.5em;
        transition: 0.3s
    }
    .siteNavigarion.active>.keyboards{
          height: 120px;
    }
    .siteNavigarion.active>.headphones{
        height: 56px;}
}

</style>