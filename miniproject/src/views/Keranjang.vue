<template>
  <div class="Keranjang">
    <Navbar :updateKeranjang="keranjangs"/>
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
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + keranjang.products.img"
                      class="img-fluid shadow"
                      alt="..."
                      width="300"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td align="center">Rp. {{ keranjang.products.harga }}</td>
                  <td align="center">
                    <strong
                      >Rp.
                      {{keranjang.products.harga * keranjang.jumlah_pemesanan}}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga: </strong>
                  </td>
                  <td align="center">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-4">
          <form class="mt-3" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Pesanan atas nama:</label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.nama"
              />
            </div>
            <div class="form-group">
              <label for="noTelp">Nomor Telpon:</label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.noTelp"
              />
            </div>
            <br />
            <button type="submit" class="btn btn-success" @click="checkout">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import axios from "axios";

export default {
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {}
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
      .delete("http://localhost:3000/keranjangs/" + id).then(() => {
        this.$toast.error("Item Berhasil Dihapus", {
          // optional options Object
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
        //update data keranjang
        axios
          .get("http://localhost:3000/keranjangs")
          .then((response) => this.setKeranjangs(response.data));
      });
    },
    checkout() {
      // console.log("pesan : ", this.pesan);
      if( this.pesan.nama && this.pesan.noTelp){
        this.pesan.keranjang = this.keranjangs;
        axios
        .post("http://localhost:3000/pesanans", this.pesan)
        .then(() => {
          // console.log("Berhasil");
          this.keranjangs.map(function(item) {
            return axios
              .delete("http://localhost:3000/keranjangs/" + item.id)
          });
          this.$router.push({ path: "/invoice-makanan"})
          this.$toast.success("Makanan Sudah Dipesan", {
            // optional options Object
            type: "success",
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          });
        })
      }else{
        this.$toast.error("Nama dan Nomor Telpon Harus Diisi!", {
            // optional options Object
            type: "error",
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          });
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
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
.btn {
  float: right;
}
</style>