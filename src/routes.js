import { createRouter, createWebHistory } from 'vue-router';


const routes = [

    {
        path: '/',
        component: () => import('./components/PageLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('./components/HomePage.vue')
            },
            {
                path: '/about',
                component: () => import('./components/AboutPage.vue')
            },
            {
                path: '/services',
                component: () => import('./components/ServicesPage/index.vue')
            },
            {
                path: '/contact',
                component: () => import('./components/ContactPage.vue')
            },
            {
                path: '/:pathMatch(.*)*', // 
                component: () => import('./components/PageNotFound.vue')
            }

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history',
});


export default router;