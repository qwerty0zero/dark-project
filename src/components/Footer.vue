<template>
<footer>
    <div class="footerItem">
        <h3 class="scroll top">DARK PROJECT</h3>
        <p class="scroll top">Your «D» side</p>
    </div>
    <div class="footerItem center">

        <div class="">
            <FooterListItem
            title="keyboards"
            :list=this.keyboardList>
            </FooterListItem>

            <FooterListItem
            title="headphones"
            :list=headphonesList>
            </FooterListItem>

            <FooterListItem
            title=""
            :list=pagesList
            type='pages'>
            </FooterListItem>
        </div>
        <div class="infoItem">
            <div class="text scroll right">
            <p>Support service</p>
            <p>Work time: 10:00-18:00</p>
            <p>Monday-Friday GMT+2</p>
            </div>


            <form action="" class="scroll right">
                <label for="">Sign up for important news</label>
                <input type="email" name="" placeholder="Email..." id="">
                <p>By subscribing to the newsletter, <br> you agree to the terms of the privacy policy</p>
            </form>
        </div>
    </div>
    <div class="footerItem">
        <div>
            <nav>
                <ul>
                    <li>
                        <router-link
                        to="/privacy-policy/"
                        >
                            Privacy policy
                        </router-link>
                    </li>
                    <li>
                        <router-link
                        to="/cookies-policy/"
                        >
                            Cookies policy
                        </router-link>
                    </li>
                    <li>
                        <router-link
                        to="/terms-of-use/"
                        >
                            Terms of use
                        </router-link>
                    </li>
                </ul>
            </nav>
            <p>Copyright © 2017-2022 Dark Project</p>
        </div>
        <p>All rights reserved</p>
    </div>
</footer>
</template>

<script>

import keyboards from "@/assets/content/keyboards.json"
import headphones from "@/assets/content/headphones.json"

import FooterListItem from "./UI/FooterListItem.vue"


export default{
    name: "Footer",
    components() {FooterListItem},
    components: {FooterListItem},
    data(){
        return{
            keyboardList: keyboards,
            headphonesList : headphones,
            pagesList: [
                {title: "Contacts", link: "/contacts/"},
                {title: "Payment", link: "/payment/"},
                {title: "Delivery", link: "/delivery/"},
                {title: "Downloads", link: "/downloads/"},
            ]
        }
    }
}
</script>

<style scoped>
footer{
    margin-top: auto;
    font-size: 1.4em;
    padding: 0 4em;
}
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


.footerItem{
    display: flex;
    justify-content: space-between;
    padding: 2em 0;
}
.footerItem.center{
    border-bottom: 1px solid rgb(255 255 255 / 45%);
    border-top: 1px solid rgb(255 255 255 / 45%);

}

.footerItem.center>div:first-child{
    display: flex;
    width: 66%;
    justify-content: space-between
}
.footerItem nav{
    margin-bottom: 0.5em;
}
.footerItem ul{
    display: flex;
    gap: 1em;
}



.infoItem, form, .text{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.text{
    gap: 0.5em;
}
form{
    margin-top: 1em;
}
form p{
    text-align: right;
    margin-top: 0.5em;
}
label{
    color: #ffffffa6;
}
input{
    outline: none;
    padding: 0.5em 1em;
    background-color: rgb(255 255 255 / 45%);
    color: #ffffffa6;
}
::placeholder { 
    color: #ffffffa6;

}

:-ms-input-placeholder { 
    color: #ffffffa6;
}

::-ms-input-placeholder { 
    color: #ffffffa6;
}

@media screen and (max-width:1000px) {
    .footerItem.center>div:first-child, .footerItem.center {
        flex-direction: column;
        width: 100%;
        padding-top: 0;
    }
    .infoItem{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2em;
}
    .text{
        align-items: flex-start;
        gap: 1em;
    }
    form{
        gap: 1em;
        margin-top: 0;
    }
}
@media screen and (max-width: 600px){
footer{
    padding: 0 1.5em;
}
.footerItem>p{
    display: none;
}
.infoItem[data-v-40ab164b] {
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;
}
form{
    align-items: flex-start;
}
form>p{
    text-align: left;
}
.footerItem ul[data-v-40ab164b] {
    flex-wrap: wrap;
}
}

</style>