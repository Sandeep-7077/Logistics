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
    path: '/select_carrier',
    name: 'SelectCarrier',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/select_carrier.vue'),
  },
  {
    path: '/shipment_details',
    name: 'ShipmentDetails',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/shipment_details.vue'),
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
  {
    path: '/shipment_history',
    name: 'Shipment History',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/shipment_history.vue'),
  },
  {
    path: '/cancel_shipment',
    name: 'Cancel Shipment',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/cancel_shipment.vue'),
  },
  {
    path: '/outstanding_amount',
    name: 'Outstanding Amount',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/outstanding_amount.vue'),
  },
  {
    path: '/ledger_details',
    name: 'Ledger Detail',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/ledger_details.vue'),
  },
  {
    path: '/my_invoices',
    name: 'My Invoices',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/my_invoices.vue'),
  },
  {
    path: '/schedule_pickup',
    name: 'Schedule Pickup',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/schedule_pickup.vue'),
  },
  {
    path: '/unbilled_shipment',
    name: 'Unbilled Shipment',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/unbilled_shipment.vue'),
  },
  {
    path: '/address_book',
    name: 'Address Book',
    meta: {
      requiresAuth: true 
    },
    component: () => import('@/pages/address_book.vue'),
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
