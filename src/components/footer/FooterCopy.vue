<template lang="html">
    <div class="footer_copy-wrap flex justify-between border-t pt-[19px] px-[24px]">
        <div class="footer_copy">
            <p class="text-[#D7D7D7]">© 2023 CARGO PRO. Все права защищены.</p>
        </div>
        <div class="footer_links flex gap-[24px]">
            <Link img="../src/img/Socialicon.png"/>
            <Link img="../src/img/Socialicon(1).png"/>
            <Link img="../src/img/Socialicon(2).png"/>
        </div>
    </div>
</template>
<script>
import Link from './Link.vue';
export default {
    components:{
        Link
    }
}
</script>
<style lang="">
    
</style>