import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BookPage from '../views/BookPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: BookPage,
    props: true, 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
