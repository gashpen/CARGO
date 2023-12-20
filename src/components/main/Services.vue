<template lang="html">
    <section class="main_services-wrap flex flex-col w-[1290px]">
        <div class="main_section-first justify-end flex">
            <div class="main_service-header-wrap w-[550px] mr-[35px]">
            <h2 class="main_service-header text-[44px] leading-[60px]">Ведущая компания в сфере транспортировки и логистики</h2>
            <p class="main_service-descr">Мы предоставляем высококачественные комплексные услуги и всегда учитываем потребности наших клиентов.</p>
        </div>
        <ServiceCard 
            img="../../src/img/icon.png" 
            header="Морские перевозки" 
            description="Мы предлагаем морские грузоперевозки из страны и в страну"
            />
        <ServiceCard
            img="../../src/img/icon(1).png"
            header="Авиаперевозки" 
            description="Мы являемся агентом крупных и надежных авиакомпаний с высокой частотой рейсов."
            />
        </div>
       <div class="main_section-second flex">
        <ServiceCard
            img="../../src/img/Group.png"
            header="Железнодорожные перевозки" 
            description="Безопасные, надежные и экологичные решения"
            trailPadding
            />
        <ServiceCard
            img="../../src/img/Group(1).png"
            header="Автомобильные перевозки" 
            description="Мы предоставляем высококачественные и надежные услуги по дорожной перевозке грузов."
            avtoPadding
            />
        <ServiceCard
            img="../../src/img/Artworks.png"
            header="Складские услуги" 
            description="У нас есть возможности для эффективного управления вашей логистической цепью, на начальном этапе или на месте назначения."
            />
        <ServiceCard
            img="../../src/img/icon(2).png"
            header="Таможенное оформление" 
            description="Мы поможем вам с оформлением груза в таможне без лишних сложностей."
            />
       </div>
    </section>
</template>
<script>
import ServiceCard from './Cards/ServiceCard.vue';
export default {
    components:{
        ServiceCard
    }
}
</script>
<style lang="css">
    .main_service-descr{
        color: #6C6C6C;
        font-size: 1rem;
    }
</style>