import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/personil',
        name: 'Vpersonil',
        component: () => import('../views/V_personil.vue')
    },
    {
        path: '/alatberat',
        name: 'Valatberat',
        component: () => import('../views/V_alat_berat.vue')
    },
    {
        path: '/supir',
        name: 'Vsupir',
        component: () => import('../views/V_supir.vue')
    },
    {
        path: '/armada',
        name: 'Varmada',
        component: () => import('../views/V_armada.vue')
    },
    {
        path: '/operator',
        name: 'Voperator',
        component: () => import('../views/V_operator.vue')
    },
    {
        path: '/stockpile',
        name: 'Vstockpile',
        component: () => import('../views/V_stockpile.vue')
    },
    {
        path: '/bbm',
        name: 'Vbbm',
        component: () => import('../views/V_bbm.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
    })

export default router