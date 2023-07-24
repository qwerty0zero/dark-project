<template>
    <Header></Header>
<h1>CONTACTS</h1>
<section>
    <ContactCardVue
    v-for="el in contactsArr"
    :title="el.title"
    :text="el.text"
    :subText="el.subText"
    :email="el.email"
    >
    </ContactCardVue>
</section>

<Footer></Footer>
</template>

<script>
import ContactCardVue from '@/components/UI/ContactCard.vue';

export default{
    name: "contacts-page",
    components() {ContactCardVue},
    components: {ContactCardVue},
    data(){
        return{
            contactsArr:[
                {
                    "title": 'Distributor',
                    "text": 'Mon-Sun 9.00 - 18.00',
                    "subText": [
                        "Address: Limassol, Profitis Ilias 4 office 102",
                        "+35725260166",
                        "+35795163449"
                    ], 
                    "email": "care@fragstore.com"
                },
                {
                    "title": 'Office representative',
                    "text": 'Mon-Sun 9.00 - 18.00',
                    "subText": ["Address: Limassol, Profitis Ilias 4 office 102"], 
                    "email": "info@darkproject.eu"
                },
                {
                    "title": 'Customer Support',
                    "subText": [], 
                    "email": "support@darkproject.eu"
                }

            ]
        }
    }
}
</script>

<style scoped>
h1{
    font-size: 6vw;
    margin: 2rem auto;
}
section{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 2em;
    margin-top: 4em;
    align-self: center;
}
@media screen and (max-width: 900px) {
    section{
    grid-template-columns: 1fr  ;
}

}
</style>