<template lang="html">
    <div :class="{
        'bg-black': bkgblack,
        ' bg-white':bkgwhite,
        'text-white': txtwhite,
        'right-[-10px] top-[110px]':position,
    }" class="achiev_card w-[320px] h-[212px] flex flex-col justify-center items-center rounded-md relative mt-[20px] shadow-cargo-card-shadow hover:scale-105 duration-300">
        <div class="achiev_head flex items-center">
            <img class="achieve_img w-[44px] h-[44px]" :src="img" alt="" :class="{
                'px-[2.2px]':memberPadding,
                'py-[2.9px]':cliPadding,
            }">
            <div class="achieve_title text-[48px] font-bold ml-[16px]">{{ num }}</div>
        </div>
        <span class="achiev_desc text-[18px] font-semibold">
            {{ description }}
        </span>
    </div>
</template>
<script>
export default {
    props:{
        num: String,
        description: String,
        bkgblack: Boolean,
        bkgwhite: Boolean,
        txtwhite: Boolean,
        position: Boolean,
        img: String,
        memberPadding: Boolean,
        cliPadding:Boolean
    }
}
</script>
<style lang="css">
    
</style>