import { createRouter, createWebHashHistory } from "vue-router";
import BeforeProcess from '../components/main/ProcessRoute/BeforeProcess.vue';
import DuringProcess from '../components/main/ProcessRoute/DuringProcess.vue'
import AfterProcess from '../components/main/ProcessRoute/AfterProcess.vue';
import Page from '../components/RouteAboutCompany/header/Page.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', components:{
            default:BeforeProcess
        }},
        {path: '/two', component: DuringProcess},
        {path: '/three', component: AfterProcess},
        {path: '/about', components:{about:Page}}
    ]
})