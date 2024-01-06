<template>
    <section class="relative  bg-black-50">
        <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
                    background-image: 
                    url('/images/Salon-Front.jpg');
                  ">
                <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div class="container relative mx-auto">
                <div class="items-center flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div class="pr-12">
                            <h1 class="text-white font-semibold text-5xl">
                                WELCOME TO RADIANCE HAVEN
                            </h1>
                            <p class="mt-4 text-lg text-Black-200">
                                We are a full-service men and women hair salon, barber,
                                beauty parlor and aesthetic medical spa located in the heart of Nairobi CBD.
                                We seek to provide the best friendly and personalized
                                services through a team of highly skilled and creative
                                professionals in a clean and relaxing environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full 
            absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                    version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="text-Black-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
        <section class="pb-10 bg-white-200 -mt-24">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap">
                    <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div class="relative flex flex-col min-w-0 break-words bg-white text-black w-full mb-8 
                        shadow-lg rounded-lg">
                            <div class="px-4 py-5 flex-auto">

                                <h6 class="text-xl text-pink font-semibold">Hair Salon</h6>
                                <p class="mt-2 mb-4 text-Black-500">
                                    You name it we, we are at your service, whether you have open hair, dreadlocks, weave or
                                    braids Each client’s hair
                                    service consultation is customized based on hair texture, length thickness, lifestyle
                                    and expected results.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 px-4 text-center">
                        <div class="relative flex flex-col min-w-0 break-words
                        bg-white text-black w-full mb-8 shadow-lg rounded-lg">
                            <div class="px-4 py-5 flex-auto">

                                <h6 class="text-xl text-pink font-semibold">Barber Shop</h6>
                                <p class="mt-2 mb-4 text-black-500">
                                    We have set the benchmark for the style-conscious
                                    gentleman, giving the perfect grooming treatment to any gent who walks through our
                                    doors.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div class="relative flex flex-col min-w-0 break-words 
                        bg-white text-black w-full mb-8 shadow-lg rounded-lg">
                            <div class="px-4 py-5 flex-auto">

                                <h6 class="text-xl text-pink font-semibold">Beuaty Parlor</h6>
                                <p class="mt-2 mb-4 text-black-500">
                                    Be it a manicure, pedicure, hot oil treatment we ensure to listen and advise what suites
                                    best based on your nail size, length and shape of the nail matrix and nail plate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="flex">
            <!-- Left Column -->
            <div class="w-1/3 p-4">
                <h2 class="text-xl text-pink font-semibold mb-4">Bridal Package</h2>
                <ul>
                    <li>Bridal hair</li>
                    <li>Bridal make up</li>
                    <li>Bridal nail care</li>
                    <li>Bridal facials</li>
                    <li>Bridal massage and body scrub package</li>
                </ul>
                <h2 class="text-xl text-pink font-semibold mb-4">Natural Hair</h2>
                <p>Flat twists, twist outs, two strand twists & comb twists/curls.</p>
            </div>

            <!-- Middle Column with Image -->
            <div class="w-1/3 p-4">
                <img src="/images/Massage.jpg" alt="Service Image" class="w-full h-auto rounded-lg">
            </div>

            <!-- Right Column -->
            <div class="w-1/3 p-4">
                <h2 class="text-xl text-pink font-semibold mb-4">Nail Art</h2>
                <p>Manicure, pedicure, manicure gel polish, pedicure gel polish, overlays, acrylics, stickons & tips.</p>
                <h2 class="text-xl text-pink font-semibold mb-4">Facials</h2>
                <p>Deep cleansing facials, anti-oxidant facials, DMK facials.</p>
                <h2 class="text-xl text-pink font-semibold mb-4">Kids Services</h2>
                <p>Kids Cornrows, haircuts, braids & Kids hair styling.</p>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'HomePage',

}
</script>

<style scoped></style>