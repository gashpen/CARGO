<template lang="html">
    <div class="w-[520px] mt-[66px]">
        <form class="main_form w-[full]" action="">
            <div class="flex flex-col gap-[60px] items-start">
                <div class="flex items-center">
                    <div class="bg-[url('../src/img/send1.png')] w-[34px] h-[34px] mr-[12px]"></div>
                    <h3 class="text-[22px] font-bold">Напишите нам</h3>
                </div>
                <div class="input_wrap flex flex-col gap-[36px] w-full">
                    <input type="text" placeholder="Полное имя" class="pb-[8px] outline-0 border-b-[1.5px] border-[#7A7A7A] focus:border-b-[1.5px] focus:border-cargo-border">
                    <input type="text" placeholder="Номер телефона" class="pb-[8px] outline-0 border-b-[1.5px] border-[#7A7A7A] focus:border-b-[1.5px] focus:border-cargo-border">
                    <input type="text" placeholder="Email адрес" class="pb-[8px] outline-0 border-b-[1.5px] border-[#7A7A7A] focus:border-b-[1.5px] focus:border-cargo-border">
                    <textarea name="" id="" cols="30" placeholder="Сообщение" class="h-[60px] resize-none outline-0 border-b-[1.5px] border-[#7A7A7A] focus:border-b-[1.5px] focus:border-cargo-border"></textarea>
                </div>
                <Button class="
                    before:content-[''] 
                    before:inline-flex 
                    before:h-[16px] 
                    before:w-[16px]
                    before:left-[20px]
                    before:bottom-[20px]
                    before:absolute
                    before:bg-[url('../src/img/send-message1.svg')]
                    before:bg-[length:16px_16px]
                    before:bg-no-repeat
                    pl-[48px]" Form title="Отправить"/>
            </div>
        </form>
    </div>
</template>
<script>
import Button from '../../header/Button.vue'
export default {
    components:{
        Button
    }
}
</script>
<style lang="">
    
</style>