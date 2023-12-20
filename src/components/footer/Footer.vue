<template lang="html">
    <footer class="footer-wrap flex justify-center bg-[#2B2B2B] py-[41px]">
        <div class="flex flex-col gap-[100px]">
            <div class="footer flex justify-between w-[1212px]">
                <FooterSletter/>
                <FooterNavCol/>
            </div>
            <FooterCopy/>
        </div>
    </footer>
</template>
<script>
import FooterCopy from './FooterCopy.vue';
import FooterNavCol from './FooterNavCol.vue';
import FooterSletter from './FooterSletter.vue';
export default {
    components: { FooterNavCol, FooterSletter, FooterCopy }
}
</script>
<style lang="">
    
</style>