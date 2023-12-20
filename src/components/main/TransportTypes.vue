<template lang="html">
    <section class="main_transport-wrap justify-center relative flex">
        <div class="main_transport-img-wrap relative">
            <img class="main_tranport-img" src="../../img/man-on-railway-tracks-in-front-of-cargo-containers-2022-12-16-22-18-46-utc 1.png" alt="">
            <div class="main_transport-quotes absolute flex flex-col left-[40px] bottom-[45px] text-white">
                <span class="text-[18px] font-medium">Железнодорожные перевозки</span>
                <span class="text-[28px] font-bold">Надежный сервис железнодорожных грузоперевозок.</span>
            </div>
        </div>
        <div class="main_transport-side w-[47%] bg-[#181818;] py-[115px] pl-[80px] z-10">
            <div class="main_transport-card">
                <h3 class="main_transport-head text-white text-[44px] mb-[36px]">Транспорт</h3>
                <p class="w-[407px] mb-[68px] text-white">Услуги по транспортировке гарантируют быстрое и своевременное прохождение грузов через границы.</p>
                <div class="main_transport-wid flex mb-[80px]">
                    <div class="main_transport-first flex flex-col mr-[60px]">
                        <div class="main_wid text-white text-[18px] bg-transportOK bg-no-repeat pl-[46px] mb-[32px]">По морю</div>
                        <div class="main_wid text-white text-[18px] bg-transportOK bg-no-repeat pl-[46px]">По воздуху</div>
                    </div>
                    <div class="main_transport-second flex flex-col">
                        <div class="main_wid text-white text-[18px] bg-transportOK bg-no-repeat pl-[46px] mb-[32px]">По Ж/Д</div>
                        <div class="main_wid text-white text-[18px] bg-transportOK bg-no-repeat pl-[46px]">Наземная перевозка</div>
                    </div>
                </div>
                <Button Arrow isTransport title="Больше наших сервисов"/>
            </div>
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
    .main_transport-img-wrap::before{
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(51, 51, 51, 0.33); 
        width: 100%;
    }
</style>