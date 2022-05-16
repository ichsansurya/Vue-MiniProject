import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Makanan from "../views/Makanan.vue";
import MakananDetail from "../views/MakananDetail.vue";
import Keranjang from "../views/Keranjang.vue";
import InvoiceMakanan from "../views/InvoiceMakanan.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/makanan",
    name: "Makanan",
    component: Makanan,
  },
  {
    path: "/makanan/:id",
    name: "MakananDetail",
    component: MakananDetail,
  },
  {
    path: "/keranjang",
    name: "Keranjang",
    component: Keranjang,
  },
  {
    path: "/invoice-makanan",
    name: "invoicemakanan",
    component: InvoiceMakanan,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;