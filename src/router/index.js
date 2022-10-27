import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    name: "AllMovies",
    path: "",
    meta: {
      title: "AllMovies",
      layout: "empty-layout",
    },
    component: () => import("../components/AllMovies"),
  },
  {
    name: "FavoriteMovies",
    path: "/favorite",
    meta: {
      title: "FavoriteMovies",
      layout: "empty-layout",
    },
    component: () => import("../components/FavoriteMovies"),
  },
  {
    name: "MovieDetail",
    path: "/detail/:id",
    meta: {
      title: "MovieDetail",
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
