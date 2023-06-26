import { createWebHistory, createRouter } from "vue-router";
import Home from "@/src/views/Home.vue";

const routes = [
  /*
  {
    path: "/blank-page",
    name: "Blank Template",
    component: CustomPageTemplate,
  },
  */
  
  {
    path: "/",
    name: "Home Default",
    component: Home,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
