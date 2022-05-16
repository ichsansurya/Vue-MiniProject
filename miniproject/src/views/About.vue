<template>
  <div class="about">
    <Navbar />
    <div class="container">
      <h1 class="brand mt-5 justify-content-center"><strong>Nasi Goreng Bintang</strong></h1>
      <div class="tm-container-inner-2 tm-contact-section">
        <div class="row">
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="d-flex h-100 mt-5">
                <br>
                <div class="deskripsi mt-5">
                  <h4>
                    Nasi Goreng Bintang adalah sebuah kedai masakan Chinese Food
                    yang terletak di Jalan Jengki Cipinang Asem. Letaknya berada di depan kelurahan
					Kebon Pala di sebelah Tukang Ayam Bakar. Nasi Goreng Bintang hadir dengan menawarkan masakan-masakan
					yang dijamin kesegaran bahannya.
                  </h4>
                  <br />
                </div>
              </div>
            </div>
			<div class="gambar col-md-6 mt-5">
				<div>
					  <img src="../assets/images/makanbareng.png" width="500px"/>
				  </div>
			</div>
          </div>
        </div>
      </div>
      <div class="maps mt-5">
        <div class="row">
			  <h2><strong>Temukan Kami!</strong></h2>
            <div class="tm-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63455.64289144018!2d106.85057671948499!3d-6.2666655161913125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f37c8f8bd3f3%3A0x94fd6133816698ef!2sNASI%20GORENG%20BINTANG!5e0!3m2!1sen!2sid!4v1652585472629!5m2!1sen!2sid"
                width="1000"
                height="800"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </div>
      <div class="faq tm-container-inner-2 tm-info-section mt-5">
        <div class="row">
          <!-- FAQ -->
          <div class="col-12 tm-faq">
            <h2 class="text-center tm-section-title"><strong>FAQs</strong></h2>
			<h3 class="text-center">Pertanyaan Seputar Nasi Goreng Bintang</h3>
            <p class="text-center">
            <div class="accordion">
              <button class="accordion">1. Apakah Makanannya Fresh?</button>
              <div class="panel">
                <h4>
                  Betul sekali karena Nasi Goreng Bintang menggunakan bahan-bahan yang
				  sudah terjamin kesegarannya
                </h4> <hr>
              </div>
              <button class="accordion">
                2. Jika ingin share di instagram mentionnya ke mana?
              </button>
              <div class="panel">
                <h4>Bisa tag @nasigorengbintang di instagram. terimakasih:)</h4> <hr>
              </div>
              <button class="accordion">3. Pelayanan juara banget deh</button>
              <div class="panel">
                <h4>Sudah pasti. Pelanggan adalah raja.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
		<div class="todo">	
		</div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";


export default {
  name: "about",
  components: {
    Navbar,
},
  
};
</script>



<style scoped>
.brand {
	text-align: center;
}
.deskripsi {
	display: flex;
}
.maps {
	text-align: center;
	justify-content: center;
	margin-top: 100px;
}
.faq {
	margin-left: 160px !important;
}
</style>