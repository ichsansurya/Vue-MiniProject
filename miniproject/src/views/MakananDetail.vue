<template>
  <div class="detail-makanan">
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/makanan" class="text-dark"
                  >Makanan</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.img"
            class="img-fluid shadow"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga : <strong>Rp. {{ product.harga }} </strong>
          </h4>
          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan:</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan:</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan (Pedas, Asin, Setengah Porsi)"
              ></textarea>
            </div>
            <br />
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue"

export default {
  name: "MakananDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      // console.log (this.pesan)
     if (this.pesan.jumlah_pemesanan){
        this.pesan.products = this.product;
      axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => {
          // console.log("Berhasil");
          this.$router.push({ path: "/keranjang"})
          this.$toast.success("Berhasil Dimasukkan ke Keranjang", {
            // optional options Object
            type: "success",
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          });
        })
        .catch((err) => console.log(err));
     } else {
       this.$toast.error("Masukkan Jumlah Pesanan", {
            // optional options Object
            type: "error",
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          });
     }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data));
  },
};
</script>

<style scoped>
.breadcrumb {
  background-color: transparent;
  padding: 0;
}
a {
  text-decoration: none;
}

.breadcrumb-item.active {
  font-weight: bold;
  color: black;
}
.img-fluid {
  border-radius: 15px;
}
</style>