<template>
<Header>

</Header>
<section>
    <h1>DOWNLOAD CENTER</h1>
    <form action="">
        <div>
            <input type="email">
            <label for=""><img src="../assets/img/svg/search.svg" alt=""></label>
        </div>

    </form>
    <p class="formP">Or choose the device you are interested in from the lists below</p>
   
    <div class="selectBox">
    <select name="" id=""
    @change="changeCategory($event)"
    v-model="selected_1"
    >
        <option v-for="el in categoryArr" v-if="el != 'Select category'" :value=el  >{{ el }}</option>
    </select>
    <select name="" id=""
    @change="changeDriverName($event)">
        <option v-if="selectCategory" v-for="el in driverArrays" :value=el.name>{{ el.name}}</option>
    </select> 
    </div>

</section>

    <section class="table"
    v-if="selectModel"
    >
    <h3>Drivers</h3>
        <div class="flex">
            <img src="../assets/img/svg/file.svg" alt="">
        <div>
            <p>NAME</p>
            <a href="">{{ model }}</a>
        </div>
        </div>

        <p>Operating system</p>
        <div>
            <p>Format</p>
            <h5>RAR</h5>
        </div>
        <div>
            <p>File size</p>
            <h5>3.07 Мб</h5>
        </div>
        <div>
            <p>Upload date</p>
            <h5>18.03.2023</h5>
        </div>
    </section>
<Footer>
    
</Footer>
</template>

<script>
export default{
    name: "downloads-page",
    data(){
        return{
            categoryArr: [
                'Select category',
                'Keyboards',
                'Headphones',
                'Mice'
            ],
            category: this.selected_1,
            selectCategory: false,
            selectModel: false,
            model: '',
            driverArrays: []
        }
    },
     methods: {
        changeCategory: function(event){
            this.category = event.target.value
            if(this.category != 'Select category')
                this.selectCategory = true
                else
                this.selectCategory = false
                this.selectModel = false
            this.driverArrays = this.selectCategory ? require(`@/assets/content/Drivers/` + this.category +`.json`): ''
        },
        changeDriverName: function(event){
            this.model = event.target.value
            this.selectModel = true
        }
     }
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
}
h1{
    font-size: 6vw;
    margin-top: 15rem;
    margin-bottom: 6rem;
    letter-spacing: 10px;
}
h3{
    font-size: 4.2em;
    position: absolute;
    top: -50%;left: 0;
    padding-right: 1em;
    background-color: black;
    transform: translateY( 100%);
    z-index: 3;
}
p{
    color: rgba(255, 255, 255, 0.35);
    font-size: 1.6em;
}
h5, a{
    color: rgba(255, 255, 255, 0.45);
    font-size: 2em;
    margin-top: 0.5em;
}
a{
    color:#1493FF;
}
.formP{
    margin: 3rem 0;
}
form{
    max-width: 820px;
    width: 100%;
}
input{
    font-size: 2.4em;
    border: 0;
    border-bottom: 1px solid #707070;
    color: #707070;
    outline:none;
    width: 100%;
    background: black;
    padding: 0.5em;
}

form>div{
    position: relative;
    margin: 0 1em;
}
label{
    position: absolute;
    top: 0; right: 0;
    transform: translate(-100%, 50%);
}

.selectBox{
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
}
select{
    background-color: #303030;
    color: #fff;
    border-radius: 5px;
    border: none;
    width: 220px;
    padding: 1em;
}
.table{
    flex-direction: row;
    width: 100%;
    max-width: 1400px;
    margin: 20rem auto 5rem auto;
    justify-content: space-around;
    padding: 4em 0; 
    border-top: 1px solid;
    border-bottom: 1px solid;
}
.flex{
    display: flex;

    align-items: center;
    gap: 3em;
}
@media screen and (max-width:800px) {
    .flex{
        flex-direction: column;
        width: 100%;
        margin-bottom: 2rem;
        text-align: center;
    }
    .table{
        flex-wrap: wrap;
        margin-top: 10rem;
    }
    h3{
    top: 0%;
    /* left: 2em; */
    transform: translateY(-50%);
    }
}
</style>