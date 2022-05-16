<template>
  <div class="home">
    <Navbar />
    <div class="container">
    <Hero />
    <br>
    <div class="row mt-4">
      <div class="col">
        <h2>Best <strong>Seller</strong></h2>
      </div>
        <div class="col">
          <router-link to="/makanan" class="btn btn-success"><b-icon-eye></b-icon-eye> Lihat Semua Menu</router-link>
        </div>
      <div class="row mb-4">
        <div class="col-md-4 mt-d" v-for="product in listBestProducts" :key="product.id">
          <CardMakanan :product="product"/>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="mt-5"><strong>Sudah 15,000 Pelanggan Menikmati Nasi Goreng Bintang</strong></h2>
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="col">
          <div class="d-flex h-100">
            <div class="nasgor justify-content-center align-self-center">
            </div>
            <div class="row mb-4">
            <div class="col-md-8">
              <div class="foto">
                <img src="../assets/images/ican.jpeg" width="350px">
              </div> <br>
              <h5><strong>Ichsan Surya, Mahasiswa</strong></h5>
              <p> Saya berlangganan di Nasi Goreng Bintang karena makanan di Nasi Goreng Bintang rasanya enak</p>
            </div>
            </div>
            <br>
            <div class="row mb-4">
            <div class="col-md-8">
              <div class="foto">
                <img src="../assets/images/beby.jpeg" width="350px">
              </div> <br>
              <h5><strong>Beby Avilla, Mahasiswa</strong></h5>
              <p> Pesan makan lewat aplikasi Nasi Goreng Bintang itu ga perlu ngantri lagi, makanannya gak itu-itu aja, dan ga perlu kebingungan tiap hari nentuin mau makan apa</p>
            </div>
            </div>
            <div class="row mb-4">
            <div class="col-md-8">
              <div class="foto">
                <img src="../assets/images/ariefmuhammad.jpeg" width="350px">
              </div> <br>
              <h5><strong>Arief Muhammad, Influencer</strong></h5>
              <p> Makanan di Nasi Goreng Bintang murah-Murah banget tapi harganya bintang 5. Saya merekomendasikan kedai ini buat teman-teman yang berada di Jakarta khususnya Jakarta Timur</p>
            </div>
            </div>
            <br />
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "../components/Hero.vue"
import CardMakanan from "../components/CardMakanan.vue"
import Navbar from "../components/Navbar.vue"


export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardMakanan,
  },
  computed: {
    listBestProducts() {
      return this.$store.state.listBestProducts;
    },
  },
  methods: {
    fetchBestProducts(){
      this.$store.dispatch("fetchBestProducts");
    },
  },
  mounted() {
    this.fetchBestProducts();
  },
};
</script>

<style scoped>
.btn-success {
  float: right;
}
img {
  border-radius: 50px;
  margin-right: 40px;
}
</style>
