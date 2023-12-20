<template lang="html">
    <div class="flex py-[250px] justify-center">
        <div class="flex w-[1180px] justify-between">
            <ContactsForm/>
            <InputsForm/>
        </div>
    </div>
</template>
<script>
import ContactsForm from '../Form/ContactsForm.vue'
import InputsForm from '../Form/InputsForm.vue'
export default {
    components:{
        ContactsForm,
        InputsForm
    }
}
</script>
<style lang="">
    
</style>