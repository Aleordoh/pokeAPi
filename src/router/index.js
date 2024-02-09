
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "is-active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemones',
      name: 'pokemones',
      component: () => import('../views/PokemonesView.vue')
    },
    {
      path: '/pokemones/:name',
      name: 'pokemon',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: () => import("../views/FavoritosView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },

  ]
})

export default router
