<template>
    <div>
        <NavBar />
        <router-view />
        <FooterPage />
    </div>
</template>

<script>
import NavBar from './NavBar/index.vue'
import FooterPage from './FooterPage/index.vue'
export default {
    name: 'PageLatout',
    components: {
        NavBar,
        FooterPage
    }

}
</script>
