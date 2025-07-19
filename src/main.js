// import Vue from "vue";
// import App from "./App.vue";
// import { BootstrapVue } from "bootstrap-vue";

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import VeeValidate from "vee-validate";

// Vue.config.productionTip = false;

// // // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// Vue.use(VeeValidate);
// new Vue({
//     render: (h) => h(App),
// }).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import VueRouter from "vue-router";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VeeValidate from "vee-validate";

// Import your components
import HelloWorld from "./components/HelloWorld.vue";
import FormView from "./components/FormView.vue";
import AboutView from "./components/AboutView.vue";
import BlogAdd from "./components/BlogAdd.vue";
import UpdateData from "./components/UpdateData.vue";

Vue.config.productionTip = false;

// Use plugins
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(VueRouter);

// Define routes
const routes = [
    { path: "/", component: HelloWorld },
    { path: "/form", component: FormView },
    { path: "/about", component: AboutView },
    { path: "/addblog", component: BlogAdd },
    {
        path: "/updatedata",
        component: UpdateData,
    },
];

// Create router instance
const router = new VueRouter({
    mode: "history", // removes # from URLs
    routes,
});

new Vue({
    router, // inject router into Vue instance
    render: (h) => h(App),
}).$mount("#app");
