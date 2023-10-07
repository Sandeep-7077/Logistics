import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)

app.component('Button', Button)
app.mount('#app')

import VueCookies from 'vue-cookies'

app.use(VueCookies)

// import * as VueGoogleMaps from 'vue2-google-maps';
// app.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyD364zQNQWLRtQyqslftm3bFlo1SxsVbCk',
//         libraries: 'places', // Add the 'places' library for Autocomplete
//     },
// });