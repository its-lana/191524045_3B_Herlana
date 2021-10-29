import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Customer from '../views/Customer.vue'
import AddCustomer from '../views/AddCustomer.vue'
import EditCustomer from '../views/EditCustomer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/customer/add',
    name: 'AddCustomer',
    component: AddCustomer
  },
  {
    path: '/customer-details/:id',
    name: 'customer-details',
    component: EditCustomer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
