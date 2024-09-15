import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Auth/Login.vue";
import Register from "./components/Auth/Register.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";

const routes = [
    {path: '/', component: Dashboard},
    {path: '/login', component: Login},
    {path: '/register', component: Register}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;