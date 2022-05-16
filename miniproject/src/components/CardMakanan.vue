<template>
<div class="card card-product">
    <img :src=" 'assets/images/' + product.img " class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title"> <strong>{{ product.nama }} </strong></h5>
      <p
        class="card-text"
      >Harga : Rp. {{ product.harga }}</p>
      <router-link class="btn btn-success" :to="'/makanan/'+product.id"><b-icon-cart></b-icon-cart> Pesan</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "CardMakanan",
  props: ["product"],
};
</script>

<style scoped>
.card {
  background-color: #ecf3e9;
}
.card:hover {
  box-shadow: 0 0 75px rgba(33,33,33,.2); 
}

.card-product {
    border-radius: 15px;
    transition: box-shadow .3s;
    margin-top: 25px;
}

.card-img-top {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

img {
  max-width: 500px;
  
}

</style>