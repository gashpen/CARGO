<template lang="html">
    <div class="flex justify-center flex-col px-[315px] bg-[#F8F8F8] py-[120px]">
        <div class="flex justify-between mb-[80px] items-center">
            <h1 class="text-[44px] font-bold">Новости</h1>
            <div class="flex flex-row-reverse">
                <div ref="next" class="swipe-b-next 
                    !block  
                    w-[40px]  
                    h-[40px] 
                    bg-[url('../../src/img/ArrowLeft2.png')] 
                    bg-center 
                    bg-no-repeat 
                    bg-cargo-border 
                    cursor-pointer">
                </div>
                <div ref="prev" class="swipe-b-prev 
                    !block  
                    w-[40px]  
                    h-[40px] 
                    bg-[url('../../src/img/ArrowRight2.png')] 
                    bg-center
                    bg-white 
                    bg-no-repeat 
                    cursor-pointer">
                </div>
            </div>
        </div>
        <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :navigation="{
                prevEl: prev,
                nextEl: next,
            }"
            :modules="modules"
            class="mySwiper w-full h-[full]"
        >
            <swiper-slide>
                <CarouselCard
                cardImg="../../src/img/a-container-gantry-crane-on-a-rail-loads-the-conta-2022-11-10-18-01-58-utc1.png"
                cardTopic="Транспортировка"
                cardTime="16, Авг. 2021"
                cardTittle="Стоимость перевозки контейнеров"
                cardDescription="Сталкиваетесь с проблемами стоимости и прогнозирования? Нужны решения?"
                />
            </swiper-slide>
            <swiper-slide>
                <CarouselCard
                cardImg="../../src/img/containers-warehouse-aerial-view-shipping-and-lo-2023-01-07-01-38-27-utc1.png"
                cardTopic="Цепочки поставок"
                cardTime="16, Авг. 2021"
                cardTittle="Управление цепочкой поставок"
                cardDescription="Управление цепочкой поставок - важная и незаменимая часть большинства бизнесов."
                />
            </swiper-slide>
            <swiper-slide>
                <CarouselCard
                cardImg="../../src/img/a-container-gantry-crane-on-a-rail-loads-the-conta-2022-11-10-18-01-58-utc1.png"
                cardTopic="Логистика"
                cardTime="16, Авг. 2021"
                cardTittle="Ваши логистические проблемы"
                cardDescription="Глобальные цепочки поставок, на которые опирается множество розничных продавцов, нарушены на длительный срок."
                />
            </swiper-slide>
            <swiper-slide>
                <CarouselCard
                cardImg="../../src/img/a-container-gantry-crane-on-a-rail-loads-the-conta-2022-11-10-18-01-58-utc1.png"
                />
            </swiper-slide>
            <swiper-slide>
                <CarouselCard
                cardImg="../../src/img/a-container-gantry-crane-on-a-rail-loads-the-conta-2022-11-10-18-01-58-utc1.png"
                />
            </swiper-slide>
        </swiper>
      
    </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CarouselCard from '../Cards/CarouselCard.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    CarouselCard
},
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [ Navigation],
      prev,
      next,
    };
  },
};
</script>
<style lang="css">
</style>