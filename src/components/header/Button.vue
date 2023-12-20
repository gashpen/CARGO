<template lang="html">
    <button v-bind:class="{
        'py-[10px] px-[25px]': isHeader,
        'py-[16px] px-[20px]': isBanner,
        'py-[12px] px-[34px]': isTransport,
        'bg-arrow bg-no-repeat bg-[center_right_8px] !bg-[#495AB4] ': Arrow,
        'py-[12px] px-[75px]':About,
        'py-[12px] px-[16px]':Process,
        'py-[16px] px-[24px]': Form,
        'py-[12px] px-[24px]': Footer,
    }"  class="header_btn rounded-md bg-cargo-blue text-white z-20 relative outline-none"><span>{{ title }}</span></button>
</template>
<script>
export default {
    props:{
      title: String,
      isHeader:Boolean,
      isBanner: Boolean,
      isTransport: Boolean,
      Arrow: Boolean,
      About: Boolean,
      Process: Boolean,
      Form: Boolean,
      Footer: Boolean
    }
}
</script>
<style lang="css">

</style>