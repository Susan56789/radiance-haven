<template>
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-grey-50 py-6 sm:py-12">
        <div class="bg-black max-w-4xl mx-auto w-full">
            <div class="grid grid-cols-6 h-full">
                <div class="bg-pink-900 p-10 col-span-2">
                    <h2 class="mb-10 font-bold text-2xl text-pink-100 before:block
                         before:absolute before:bg-pink-300 before:content[''] relative
                          before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                        Contact Info</h2>
                    <p class="font-bold text-pink-100 py-8 border-b border-pink-700">
                        Location Address
                        <span class="font-normal text-xs text-pink-300 block">Nairobi,Kenya</span>
                    </p>
                    <p class="font-bold text-pink-100 py-8 border-b border-pink-700">
                        Phone Number
                        <span class="font-normal text-xs text-pink-300 block">+2547123456789</span>
                    </p>
                    <p class="font-bold text-pink-100 py-8 border-b border-pink-700">
                        Email Address
                        <span class="font-normal text-xs text-pink-300 block">example@radiancehaven.com</span>
                    </p>
                    <p class="font-bold text-pink-100 py-8 border-b border-pink-700">
                        Web Address
                        <span class="font-normal text-xs text-pink-300 block">radiancehaven.com</span>
                    </p>

                </div>
                <div class="bg-pink-400 p-14 col-span-4">
                    <h2 class="mb-14 font-bold text-4xl 
                        text-black-900 before:block before:absolute 
                        before:bg-pink-300 before:content[''] relative before:w-20
                         before:h-1 before:-skew-y-3 before:-bottom-4">
                        Enquiry Form</h2>
                    <div class="grid gap-6 mb-6 grid-cols-2">
                        <div class="flex flex-col">
                            <input class="py-4 bg-white rounded-full px-6
                             placeholder:text-xs" aria-placeholder="Name" placeholder="John Doe" />
                        </div>
                        <div class="flex flex-col">
                            <input class="py-4 bg-white rounded-full
                             px-6 placeholder:text-xs" aria-placeholder="Phone Number" placeholder="+2547123456789" />
                        </div>
                    </div>
                    <div class="grid gap-6 mb-6 grid-cols-2">
                        <div class="flex flex-col">
                            <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Email"
                                placeholder="johndoe@gmail.com" />
                        </div>
                        <div class="flex flex-col">
                            <input class="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Subject"
                                placeholder="Subject" />
                        </div>
                    </div>
                    <div class="mb-6">
                        <textarea class="w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Message" name=""
                            id="" rows="8"></textarea>
                    </div>
                    <div class="flex justify-center">
                        <button class="rounded-full bg-pink-900 text-white
                             font-bold py-4 px-6 min-w-40 hover:bg-pink-800 transition-all">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',

}
</script>