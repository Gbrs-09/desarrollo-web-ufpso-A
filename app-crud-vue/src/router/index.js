import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductoComponent from '@/components/ProductoComponent.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/products', component: ProductoComponent }
]

export default createRouter({
  history: createWebHistory(),
  routes
})