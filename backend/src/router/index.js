import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

const routes = [
    {
        path: '/dashboard',
        dashboard: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        dashboard: 'login',
        component: Login
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes
  })


export default router;
