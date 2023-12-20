<template lang="html">
    <header class="header flex justify-between w-[1440px] my-0 m-auto py-4 px-[75px] items-center"> 
        <Logo/>
        <nav class="header_nav">
            <ul class="header_link-wrap flex justify-between text-cargo-gray">
            <li class="link ">
                <router-link to="/">Главная</router-link>
            </li>
            <li class="link">
                <router-link to="/about">О компании</router-link>
            </li>
            <li class="link">
                <a href="#" >Маркет</a>
            </li>
            <li class="link">
                <a href="#" >Карго</a>
            </li>
            <li class="link">
                <a href="#" >Информация</a>
            </li>
            <li class="link">
                <a href="#">Услуги</a>
            </li>
            <li class="link">
                <a href="#" >Контакты</a>
            </li>
            <li class="link">
                <a href="#">Блог</a>
            </li>
        </ul>
        </nav>
        <Button isHeader title="Войти"/>
    </header>
</template>
<script>
import Button from './Button.vue';
import Logo from './Logo.vue';
export default {
    components:{
    Button,
    Logo
},
    
}
</script>
<style lang="css">    
    .link:not(:last-child){
        margin-right: 48px;
    }
</style>