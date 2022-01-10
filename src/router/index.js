import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../HomePage';
import about from '../components/pages/about';
import blog from '../components/pages/blog';
import contact from '../components/pages/contact';
import gallery from '../components/pages/gallery';
import pricing from '../components/pages/pricing';
import services from '../components/pages/services';

import Pricing from '../components/sections/Pricing';

Vue.use(VueRouter);

const routes = [ 
    { path: '/homepage', component: HomePage },
    { path: '/about', component: about },
    { path: '/blog', component: blog },
    { path: '/contact', component: contact },
    { path: '/gallery', component: gallery },
    { path: '/pricing', component: pricing },
    { path: '/services', component: services },

    { path: '/innerpricing', component: Pricing },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
