import { createRouter, createWebHistory } from 'vue-router'
// import Cookies from 'js-cookie'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/create_shipment',
    name: 'CreateShipment',
    component: () => import('@/pages/create_shipment.vue'),
  },
  {
    path: '/raise_query',
    name: 'RaiseQuery',
    component: () => import('@/pages/raise_query.vue'),
  },
  {
    path: '/shipment_tracking',
    name: 'ShipmentTracking',
    component: () => import('@/pages/shipment_tracking.vue'),
  },
  {
    path: '/my_profile',
    name: 'MyProfile',
    component: () => import('@/pages/my_profile.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

// Define a navigation guard
// router.beforeEach((to, from, next) => {
//   const key = Cookies.get('sid');
//   console.log('sid:', key);
//   if (!key && to.name !== 'Login') {
//     // If 'sid' cookie is not found and the user is not already on the 'Login' page,
//     // redirect to the 'Login' page.
//     next({ name: 'Login' });
//   } else if (key && to.name === 'Login') {
//     // If 'sid' cookie is found and the user tries to access the 'Login' page,
//     // redirect to the 'Home' page.
//     next({ name: 'Home' });
//   } else {
//     // If the 'sid' cookie is found or the user is already on the 'Login' page,
//     // allow the navigation to continue.
//     next();
//   }
// })

export default router;


// import { createRouter, createWebHistory } from 'vue-router';

// const routes = [
//   { path: '/login', name: 'Login', component: () => import('@/pages/Login.vue') },
//   { path: '/dashboard', name: 'Home', component: () => import('@/pages/Home.vue'), meta: { requiresAuth: true } },
//   // Other routes...
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// import router from './router';
// import store from './store';

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!store.state.isAuthenticated) {
//       // Redirect to the login page if not authenticated
//       next('/login');
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

// export default router;