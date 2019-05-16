import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Axios from "./views/Axios.vue";
import Login from "./views/Login.vue";
import City from "./views/City.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/axios",
      name: "axios",
      component: Axios
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/city/:cityName",
      name: "City",
      component: City
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
