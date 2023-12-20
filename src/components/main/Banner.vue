<template lang="html">
    <section class="main_banner-wrap h-[768px] relative">
        <img class="main_banner-img w-full h-full object-cover object-[0_0]" src="../../img/e2cf4c82afedc076d5ee751ffc024520.jpg" alt="">
        <div class="main_banner-header-wrap w-[735px] h-full flex absolute inset-y-[23%] left-[17%] flex-col items-start">
            <p class="text-[14px] text-white z-10 font-medium leading-[26px]">Доставка груза: без границ и ограничений</p>
            <div class="h-[1px] w-[216px] mb-[28px] bg-cargo-border"></div>
            <h1 class="text-[56px] text-white z-10 leading-[58px] font-bold">CARGO PRO - ваш ключ к простой и быстрой логистике.</h1>
            <p class="text-[16px] text-white z-10 w-[559px] mb-[100px] leading-[26px]">Доверьте нам свои отправления, и мы гарантируем их своевременную и надежную доставку. Все ваши потребности - наш приоритет!</p>
            <Button isBanner title="Наши сервисы"/>
        </div>
    </section>
</template>
<script>
import Button from '../header/Button.vue';
export default {
    components:{
        Button
    }
}
</script>
<style lang="css">
    .main_banner-wrap::after{
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.70) -19.7%, rgba(0, 0, 0, 0.00) 100%);
    }
</style>