<template lang="html">
     <router-view name="about"></router-view>
    <main class="main flex flex-col justify-center">
        <Banner/>
    <div class="main-serv flex flex-col items-center py-[148px]">
        <Services/>
    </div>
        <TransportTypes/>
        <About/>
        <OurProcesses/>
        <Carousel/>
        <Form/>
    </main>
</template>
<script>
import Banner from './Banner.vue';
import Services from './Services.vue';
import TransportTypes from './TransportTypes.vue';
import About from './About.vue';
import OurProcesses from './OurProcesses.vue';
import Carousel from './Carousel/Carousel.vue';
import Form from './Form/Form.vue';

export default {
    components:{
    Banner,
    Services,
    TransportTypes,
    About,
    OurProcesses,
    Carousel,
    Form,
}    
}
</script>
<style lang="css">
    
</style>