import VueRouter from "vue-router";

import ProfilNasabah from "../views/ProfilNasabah/Pages/ProfilNasabah.vue";

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes: [
    { path: "/", component: ProfilNasabah },
    { path: "*", redirect: "/" },
    { path: "/*", redirect: "/" },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
