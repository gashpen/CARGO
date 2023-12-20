<template lang="html">
    <div class="main_service-card w-[300px] mx-[15px] flex flex-col py-[32px] px-[28px] ease-in-out duration-300 hover:shadow-cargo-shadow cargo-transition">
        <img v-bind:class="{'py-[7.8px]': avtoPadding,'px-[7px]':trailPadding}" :src="img" class="w-[52px] h-[52px]" alt="">
        <h3 class="main_service-card-header text-[22px] font-semibold mt-[28px] mb-[24px]">{{ header }}</h3>
        <p class="main_service-card-desc text-[16px] leading-[26px]">{{ description }}</p>
    </div>
</template>
<script>
export default {
    props:{
        img:{
            type: String
        },
        header:{
            type: String
        },
        description:{
            type: String
        },
        avtoPadding:{
            type: Boolean
        },
        trailPadding:{
            type: Boolean
        }
    }
}
</script>
<style lang="css">
    p{
        color: #6C6C6C;
    }
</style>