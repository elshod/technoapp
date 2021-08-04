import VueRouter from "vue-router"
import Home from './components/Home.vue'
export default new VueRouter({
    routes: [
        {
            path:'', 
            component: Home,
            name: 'Home'
        },
        {
            path: '/category',
            component: () => import('./components/Category.vue'),
            name: 'Category',
            children: [
                {
                    path:'list',
                    component: () => import ('./components/Category/List.vue'),
                    name: 'List'
                },
                {
                    path:'new-category',
                    component: () => import ('./components/Category/NewCategory.vue'),
                    name: 'NewCategory'
                },
            ]
        },
        {
            path: '/devices',
            name: 'Devices',
            component: () => import('./components/Devices.vue'),
            children: [
                {
                    path: ':id',
                    name:'Device',
                    component: () => import('./components/Device.vue')
                }
            ]
        },
        {
            path: '/posts',
            redirect: '/category'
        },
        {
            path: '*',
            component: () => import('./components/Error.vue')
        }
    ],
    mode: 'history'
})