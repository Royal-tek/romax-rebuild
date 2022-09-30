<template>
    <div class="holder">
    <Navbar/>
    
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs d-flex align-items-center" style="background-image: url('assets/images/12.jpg'); background-attachment: fixed;">
    <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Contact</h2>
        <ol>
        <li><router-link class="nav-links" to="/" >Home</router-link></li>
        <li>Contact</li>
        </ol>

    </div>
    </div><!-- End Breadcrumbs -->
       <!-- ======= Contact Section ======= -->
       <section id="contact" class="contact">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">
          <div class="col-lg-6">
            <div class="info-item  d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-map"></i>
              <h3>Our Address</h3>
              <p>45A Alternative Route, Chevron Drive, Lekki, Lagos.</p>
            </div>
          </div><!-- End Info Item -->

          <div class="col-lg-3 col-md-6">
            <div class="info-item d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>Sales@romax.com</p>
            </div>
          </div><!-- End Info Item -->

          <div class="col-lg-3 col-md-6">
            <div class="info-item  d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>07000076629</p>
            </div>
          </div><!-- End Info Item -->

        </div>

        <div class="row gy-4 mt-1">

          <div class="col-lg-6 ">
            <iframe src="https://maps.google.com/maps?q=45A,%20Alternative%20Route,%20Chevron%20Drive,%20Lekki,%20Lagos.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe>
          </div><!-- End Google Maps -->

          <div class="col-lg-6">
            
            <form @submit.prevent="sendMail"  class="php-email-form">
              <div class="row gy-4">
                <div class="col-lg-6 form-group">
                  <input type="text"  class="form-control" v-model="fullname"  placeholder="Full Name" required>
                </div>
                <div class="col-lg-6 form-group">
                  <input type="email" class="form-control" v-model="email"   placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" v-model="subject"  placeholder="Subject" required>
              </div>
              <div class="form-group">
                <textarea class="form-control" v-model="message"  rows="5" placeholder="Message" required></textarea>
              </div>
              
              <div class="my-2">
                <div class="loading">Loading</div>
                <!-- <div class="error-message"></div> -->
                <div class="sent-messages py-3 text-center text-white" v-if="status">{{this.status}}</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>
    </section><!-- End Contact Section -->
</div>
</template>

<script>
  import axios from 'axios'
    import Navbar from '../components/Navbar.vue'
export default {
    name : 'Contact',
    data(){
      return{
        fullname : '',
        subject : '',
        message : '',
        email : '',
        status : ''
      }
    },
    mounted(){

    },
    methods :{
      sendMail(){
        const fd = new FormData()
        fd.append('fullname', this.fullname)
        fd.append('subject', this.subject)
        fd.append('message', this.message)
        fd.append('email', this.email)

        axios.post('http://127.0.0.1:8000/api/contact/', fd)
        .then(response =>{
          this.status = "Message sent successfully"
          setInterval(()=>{
            this.status = ''
          }, 2000)
          this.fullname = ''
          this.subject = ''
          this.message = ''
          this.email = ''
          console.log(response.data)
        })
        .catch(err =>{
          this.status = "Message send failure"
          console.log(err)
        })
      }
    },
    components : {
    Navbar
    
    }
}
</script>

<style lang="scss">
    .nav-links{
        text-decoration: none !important;
    }
    
    .sent-messages{
      width: 100%;
      background-color: orange;
    }

</style>
