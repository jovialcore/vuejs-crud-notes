import {
    createRouter, createWebHistory
} from "vue-router";

import LandingPage from "../components/LandingPage.vue";

import CreateNote from "../components/CreateNote.vue";

import ShowNote from "../components/ShowNote.vue";


const routes = [
    { path: '/', Component: LandingPage },
    { path: '/create', Component: CreateNote },
    { path: '/show', Component: ShowNote }

];

const router = createRouter({

    history: createWebHistory(),
    routes

})

export default router