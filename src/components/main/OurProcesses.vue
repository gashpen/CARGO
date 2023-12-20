<template lang="html">
    <div class="flex justify-center">
        <section class="main_process-wrap py-[160px] w-[1290px]">
            <h3 class="main_process-head text-[44px] font-bold mb-[75px]">Наши процессы</h3>
            <div class="process-widget-wrap w-full flex justify-start border-b-[2px] h-[39px]">
                <div @click="goToOnePage" class="item w-[278px] cursor-pointer" v-on:click.prevent="activeLink = 1" v-bind:class="{'border-b-[4px] border-[#495AB4] duration-300': activeLink=== undefined||activeLink === 1}">
                    <p id='item1'>
                         Перед отправкой
                    </p>
                </div>
                <div @click="goToTwoPage" class="item ml-[120px] w-[278px] cursor-pointer" v-on:click.prevent="activeLink = 2" v-bind:class="{'border-b-[4px] border-[#495AB4] duration-300': activeLink === 2}">
                    <p id='item1'  >
                        Во время отправки
                    </p>
                </div>
                <div @click="goToThreePage" class="item ml-[120px] w-[278px] cursor-pointer"  v-on:click.prevent="activeLink = 3" v-bind:class="{'border-b-[4px] border-[#495AB4] duration-300': activeLink === 3}">
                    <p id='item1'>
                       После отправки
                    </p>
                </div>
            </div>
            <router-view></router-view>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeLink: undefined
        }
    },
    methods:{
        goToOnePage(){
            this.$router.push('/')
        },
        goToTwoPage(){
            this.$router.push('/two')
        },
        goToThreePage(){
            this.$router.push('/three')
        }
    }
}
</script>
<style lang="">
    
</style>