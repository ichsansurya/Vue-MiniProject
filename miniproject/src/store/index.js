import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listBestProducts: [],
  },
  mutations: {
    setListBestProducts(state, params){
      state.listBestProducts = params;
    }
  },
  actions: {
    fetchBestProducts(store){
      axios
      .get("http://localhost:3000/best-products")

      .then((response => {
        // console.log("response: ", response);
        store.commit("setListBestProducts", response.data)
      }))
    }
  },
  modules: {},
});