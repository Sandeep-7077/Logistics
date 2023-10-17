import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'Home',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/create_shipment',
    name: 'CreateShipment',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/create_shipment.vue'),
  },
  {
    path: '/raise_query',
    name: 'RaiseQuery',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/raise_query.vue'),
  },
  {
    path: '/shipment_tracking',
    name: 'ShipmentTracking',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/shipment_tracking.vue'),
  },
  {
    path: '/my_profile',
    name: 'MyProfile',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/my_profile.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let token = JSON.parse( localStorage.getItem('token') );
    if (token) {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});


export default router;
