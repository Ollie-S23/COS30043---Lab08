import { createRouter, createWebHistory } from 'vue-router'
import getJSON from '../components/getJSON.vue'
import useFetch from '../components/useFetch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/getJSON' },
    { path: '/getJSON', component: getJSON },
    { path: '/useFetch', component: useFetch },
    
  ]
})

export default router