<template>
    <div class="vApp">
                    <vNavbar></vNavbar>
                    <vMain></vMain>
    </div>
</template>
<script>
import vNavbar from '@/components/v-navbar.vue';
import vMain from "@/components/v-main.vue";
export default {
    name: 'v-app',
    components: {
        vMain,
        vNavbar
    }
}
</script>
<style lang="scsc" scoped>
    
</style>