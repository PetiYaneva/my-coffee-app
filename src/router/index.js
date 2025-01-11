import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"
import Services from "@/views/Services.vue";
import Contact from "@/views/Contact.vue";
import Information from "@/views/Information.vue";
import About from "@/views/About.vue";


const routes = [
  { path: '/', redirect: '/home'},
  { path: "/home", name:"HomePage", component: Home},
  { path: "/services", name: "ServicesPage", component: Services },
  { path: "/contact", name: "ContactPage", component: Contact },
  { path: "/information", name: "InformationPage", component: Information },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
