import Vue from 'vue'
import VueRouter from 'vue-router'

/* pages */
import Home from "@/pages/Home.vue"
import Documentation from "@/pages/Documentation.vue"


const routes = [
  { path: '/', name:'Home', component: Home },
  { path: '/documentation', name:'Documentation', component: Documentation },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter)

export default router