import { createRouter, createWebHistory } from 'vue-router'
import {authStore} from "../stores/authStore";
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import DashboardComponent from '../views/AccountView.vue';
import Sidebar from '../components/backend/Sidebar.vue'
import Header from '../components/backend/TopNavbar.vue'
import HomeView from '../views/HomeView.vue'
import ProductListView from '../views/ProductListView.vue'
import Product from '../views/ProductView.vue'

import Cart from '../views/CartView.vue'
import Orders from '../components/frontend/Orders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'Home',
      component : HomeView,

  }, 

  {
      path : '/register',
      name : 'Register',
      component : RegisterView
  },
  {
    path : '/login',
    name : 'Login',
    component : LoginView
},
{
  path : '/shop',
  name : 'Products',
  component : ProductListView
},
{
  path: '/products/:id', components: {
      default: Product,
      LeftSideBar: Sidebar
  },
  name: 'singleProduct',
},
{
  path: '/cart', components: {
      default: Cart,
      LeftSideBar: Sidebar
  }
},
{
  path: '/orders', components: {
      default: Orders,
      LeftSideBar: Sidebar
  }
},
  {
    path : '/dashboard',
    name : 'Dashboard',
    components : {
      default:DashboardComponent,
    LeftSideBar: Sidebar,
    TopHeader: Header,
    },

    meta : {
        isAuthenticated : true
    }
},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})


router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth && !authStore.isAuthenticated){
    next('/login')
}else{
    next()
}
})


export default router;