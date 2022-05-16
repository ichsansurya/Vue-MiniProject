<template>
    <div id="nav">
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <a href="/" class="logo"><img src="../assets/images/logo.png" width="50px"/></a>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/makanan">Makanan</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
          </b-navbar-nav>
          <b-navbar-nav class="ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">Keranjang
              <b-icon-bag></b-icon-bag>
              <span class="badge bg-success ml-2">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: []
    }
  },
  props: ['updateKeranjang'],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data
    }
  },
    mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data));
  },
}
</script>

<style>

#nav {
  padding: 5px;
  background-color: #F9EBC8;
}

#nav a {
  color: #2c3e50;
  
}
#nav a.router-link-exact-active {
  color: black;
  font-weight: bold;
} 

.logo {
  margin-right: 5px;
}
</style>