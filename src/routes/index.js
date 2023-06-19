import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../components/LandingPage.vue";

import CreateNote from "../components/CreateNote.vue";

import ShowNote from "../components/ShowNote.vue";


const routes = [
    { path: "/", component: LandingPage, name: "landing" },
    { path: "/create", component: CreateNote, name: "create" },
    { path: "/show", component: ShowNote, name: "show" }

];

const router = createRouter({

    history: createWebHistory(),
	routes,

});

export default router;