import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    name: "dashboard",
    path: "",
    meta: {
      title: "DashboardMovie",
      layout: "empty-layout",
    },
    component: () => import("../components/DashboardMovie"),
  },
  {
    name: "Favaorite Movies",
    path: "/favorite",
    meta: {
      title: "Favaorite Movies",
      layout: "empty-layout",
    },
    component: () => import("../components/FavoriteMovies"),
  },
  {
    name: "Movie Details",
    path: "/detail",
    meta: {
      title: "Movie Details",
      layout: "empty-layout",
    },
    component: () => import("../components/MovieDetail"),
  },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  next((vm) => {
    vm.prevRoute = from;
  });
});
export default router;
