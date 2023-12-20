<template lang="html">
    <div class="footer_newsletter flex flex-col items-start gap-[29px]">
        <div class="footer_logo-wrap flex flex-col items-start">
            <Logo/>
            <span class="text-[18px] font-bold text-white">CARGO PRO</span>
        </div>
        <div class="footer_subscription flex flex-col items-start">
            <span class="text-[18px] font-semibold text-white">Подпишитесь на рассылку</span>
            <p class="text-[16px]">Мы будем отправлять вам полезную информаю раз в неделю</p>
            <form action="">
                <input class="w-[280px] px-[16px] py-[12px] rounded-lg outline-none mr-[16px] mt-[16px]" type="text" placeholder="Ваш Email">
                <Button Footer title="Отправить"/>
            </form>
        </div>
    </div>
</template>
<script>
import Logo from '../header/Logo.vue';
import Button from '../header/Button.vue';
export default {
    components: { Logo, Button }
}
</script>
<style lang="">
    
</style>