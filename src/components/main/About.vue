<template lang="html">
        <div class="main_about-wrap bg-[#F8F8F8] flex justify-center relative">
        <section class="main_about flex">
            <div class="w-[550px] mt-[239px]">
                <h3 class="text-[44px] mb-[36px]">Профессионалы в транспортировке</h3>
                <p class="text-[16px] mb-[80px]">
                    Мы предоставляем комплексные услуги 
                    по транспортировке для наших партнеров 
                    по всему миру и всегда предлагаем инновационные 
                    решения для сложных логистических задач.
                </p>
                <Button About title="О нас"/>
            </div>
            <div class="main_achievement-wrap w-[600px] flex relative mt-[160px] mb-[220px] ml-[138px]">
                <AchievCard 
                    img="../../src/img/Component166.png" 
                    num="950"
                    bkgblack
                    txtwhite
                    description="Совершено перевозок"
                    position
                />
                <div class="right_card-wrap">
                    <AchievCard
                        img="../../src/img/Group(2).png"
                        num="1250"
                        description="Довольных клиентов"
                        bkgwhite
                        cliPadding
                    />
                     <AchievCard
                        img="../../src/img/Group(3).png"
                        num="120"
                        description="Членов команды"
                        bkgwhite
                        memberPadding
                    />
                </div>
            </div>
        </section>
    </div>
    
</template>
<script>
import Button from '../header/Button.vue';
import AchievCard from './Cards/AchievCard.vue';
export default {
    components:{
        Button,
        AchievCard
    }
}
</script>
<style lang="css">
</style>