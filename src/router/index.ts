import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import notFound from '@/components/exception/exception-page.vue';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // 进度条样式

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'webglTransition',
        meta: {
            title: 'webglTransition',
        },
        component: () => import(/* webpackChunkName: "about" */ '@/pages/webgl-transition-demo.vue'),
    },
    {
        path: '/view-code',
        name: 'viewCode',
        meta: {
            title: 'viewCode',
        },
        component: () => import(/* webpackChunkName: "about" */ '@/pages/components/separate-example-code.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound, // 引入 组件
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title as string;
    }
    NProgress.start(); // start progress bar
    return true;
});

router.afterEach(() => {
    NProgress.done(); // finish progress bar
});

export default router;