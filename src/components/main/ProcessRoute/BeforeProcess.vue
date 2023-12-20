<template lang="html">
    <div class="process_page flex justify-between">
        <div class="process_desc-wrap flex flex-col items-start">
            <p class="mb-[40px] mt-[100px]">Мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.</p>
            <ProcessTitles title="Стандартные операционные процедуры по обслуживанию транспортных средств"/>
            <ProcessTitles title="План управления транспортировкой"/>
            <ProcessTitles title="Стандартные операционные процедуры для погрузки."/>
            <div >
                <Button class="process-btn 
                after:content-[''] 
                after:inline-flex 
                after:h-[40px] 
                after:w-[40px]
                after:absolute
                after:right-[-70px]
                after:top-[3px]
                after:bg-[url('../src/img/Arrow25.svg')]
                after:bg-[length:40px_40px]
                after:bg-no-repeat
                mt-[56px]" Process title="Посмотреть детали"/>
            </div>
        </div>
        <img class="ml-[45px] mt-[60px]" src="../../../img/young-warehouse-workers-working-together-2022-03-30-20-23-36-utc 1.png" alt="">
    </div>
</template>
<script>
import Button from '../../header/Button.vue';
import ProcessTitles from './ProcessTitles.vue';

export default {
    components: { ProcessTitles, Button }
}
</script>
<style lang="css">

</style>