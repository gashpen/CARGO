<template lang="html">
    <div class="carousel_card">
        <img :src="cardImg" alt="">
        <div class="carousel_card-topic flex justify-evently my-[25px]">
            <div class="flex pr-[20px] border-r">
                <div class="bg-[url('../../src/img/Folder.png')] bg-no-repeat w-[28px] h-[28px]"></div>
                <p class="text-[18px] font-semibold">{{ cardTopic }}</p>
            </div>
            <div class="flex ml-[20px]">
                <div class="bg-[url('../../src/img/TimeCircle.png')] bg-no-repeat w-[28px] h-[28px]"></div>
                <p class="text-[18px] font-semibold">{{ cardTime }}</p>
            </div>
        </div>
        <h2 class="text-[28px] font-bold">{{ cardTittle }}</h2>
        <p class="mb-[20px]">{{ cardDescription }}</p>
        <a href="#" class="text-[20px] font-semibold underline active:text-cargo-border relative
                active:after:content-[''] 
                active:after:inline-flex 
                active:after:h-[20px] 
                after:w-[20px]
                after:absolute
                after:right-[-35px]
                after:top-[7px]
                after:bg-[url('../src/img/Arrow6.svg')]
                after:bg-[length:20px_20px]
                after:bg-no-repeat
                mt-[56px]
        ">Читать далее</a>
    </div>
</template>
<script>
export default {
    props:{
        cardImg: String,
        cardTopic: String,
        cardTime: String,
        cardTittle: String,
        cardDescription: String,
    }
}
</script>
<style lang="css">
    
</style>