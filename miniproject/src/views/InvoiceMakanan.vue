<template>
  <div id="invoice">
      <Navbar />
      <div class="container">
          <div class="row justify-content-center mt-5">
              <div class="col text-center">
                  <img src="../assets/images/menunggu.png" width="500px"/>
                  <h2><strong>Pesanan anda sedang diproses</strong></h2>
                  <h3>Harap Menunggu</h3>
                <div class="table-responsive mt-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Urutan Pesanan</th>
                  <th scope="col">Atas Nama</th>
                  <th scope="col">Nomor Telpon</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(pesanan, index) in pesanans"
                  :key="pesanan.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <strong>{{ pesanan.nama }}</strong>
                  </td>
                  <td>
                    <strong>{{ pesanan.noTelp }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
              </div>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";


export default {
    name: "InvoiceMakanan",
    components: {
        Navbar,
    },
    data() {
        return{
            pesanans:[],
        };
    },
    methods: {
        setPesanans(data){
            this.pesanans = data;
        }
    },
    mounted() {
        axios
      .get("http://localhost:3000/pesanans")
      .then((response) => this.setPesanans(response.data));
    },
}
</script>

<style>

</style>