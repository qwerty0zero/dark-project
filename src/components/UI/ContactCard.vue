<template>
<div class="contactCard">
    <h2>  {{ title }}</h2>
    <p>{{ text }}</p>

    <div class="textBox">
        <p 
        v-for="el in subText">
        <p>{{ el }}</p>
        </p>
    </div>
    <p>Email: <a :href="`mailto:` + email"> {{ email }}</a>
    </p>
</div>
</template>
<script>
export default{
    data(){
        return{

        }
    }, 
    props: ["title", "text", "subText", "email"]
}
</script>

<style scoped>
.contactCard{
    padding: 5em;
    display: flex;
    flex-direction: column;
    background: #151515;
    border-radius: 1rem;
    gap: 1.5em;
    max-width: 650px;
}
.textBox{
    display: flex;
    flex-direction: column;
    gap:0.5em;
}
h2{
    font-size: 3.2em;
    gap: 23px;
    display: flex;
    align-items: center;
}
h2::before{
    content: " ";
    height: 100%;
    width: 3px;    
}
p{
    font-size: 15px;
}
a{
    color: #1493FF;
}
a:hover{
    color: #1493FF;
}

.contactCard:nth-child(1) h2::before{
    background-color: #1493FF;
}
.contactCard:nth-child(2) h2::before{
    background-color: #FFBD00;
}
.contactCard:nth-child(3) h2::before{
    background-color: #07c202;
}
@media screen and (max-width: 900px) {
}
</style>