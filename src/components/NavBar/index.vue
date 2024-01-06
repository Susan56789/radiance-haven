<template>
    <nav class="bg-white-800 p-5 ">
        <div class="flex items-center justify-between">
            <a class="text-pink text-lg font-semibold" href="/">Your Logo</a>
            <div class="lg:hidden">
                <button @click="toggleMobileMenu" class=" text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:items-center lg:space-x-4">
                <a class=" text-white " href="/">Home</a>
                <a class=" text-white " href="/about">About</a>
                <a class=" text-white " href="/services">Services</a>
                <a class=" text-white " href="/contact">Contact</a>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-show="isMobileMenuOpen" class="lg:hidden mt-4">
            <a class="block text-white  " href="/">Home</a>
            <a class="block text-white  " href="/about">About</a>
            <a class="block text-white  " href="/services">Services</a>
            <a class="block text-white  " href="/contact">Contact</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
    },
}

</script>

<style scoped>
nav {
    background: var(--color-black);
    justify-content: space-between;
    border-radius: 22px;
    box-shadow: 2px 2px 20px rgba(235, 230, 230, 0.863);
}

a {
    padding: 8px 16px;
    border-radius: 22px;
}

a:hover {
    transition: 0.25s;
    background: var(--color-pink);
    color: var(--color-white);
}
</style>