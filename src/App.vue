<script setup>
import Header from './components/header/Header.vue'
import Main from './components/main/Main.vue';
import Footer from './components/footer/Footer.vue';
</script>

<template>
  <Header/>
  <Main/>
  <router-view name="main"></router-view>
  <Footer/>
</template>

<style scoped>
</style>
