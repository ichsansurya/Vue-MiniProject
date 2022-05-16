<template>
  <div class="makanan">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h2>Daftar <strong>Makanan</strong></h2>
          <br />
        </div>
      </div>
      <div class="input-group mb-3">
        
        <input
          v-model="search"
          type="text"
          class="form-control"
          placeholder="Cari Makanan Favoritmu!"
          aria-label="Cari Makanan Favoritmu!"
          aria-describedby="basic-addon1"
          @keyup="searchMakanan"
        />
        <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
      </div>
      <br>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-d"
          v-for="product in products"
          :key="product.id"
        >
          <CardMakanan :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardMakanan from "../components/CardMakanan.vue";
import Navbar from "../components/Navbar.vue"
import axios from "axios";

export default {
  name: "Makanan",
  components: {
    CardMakanan,
    Navbar,
  },
  data() {
    return {
      products: [],
      search: ''
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchMakanan() {
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) => this.setProducts(response.data));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data));
  },
};
</script>