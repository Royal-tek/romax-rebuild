<template>
    <div class="holder">
        <Navbar/>
            <!-- ======= Breadcrumbs ======= -->
        <div class="breadcrumbs d-flex align-items-center" style="background-image: url('/assets/images/13.jpg');">
            <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

            <h2>Property Details</h2>
                <ol>
                <li><a href="index.html">Home</a></li>
                <li>Property Details</li>
                </ol>

            </div>
        </div><!-- End Breadcrumbs -->

         <!-- ======= Projet Details Section ======= -->
    <section id="project-details" class="project-details">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="img-holder" >
                    <img :src='product.image' style="width:100%; height: 100%;" class="img-fluid img-responsive" alt="">
                </div>

        <!-- <div class="position-relative h-100">
          <div class="slides-1 portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">

              <div class="swiper-slide">
                <img :src="product.image" alt="">
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
          

        </div> -->

        <div class="row justify-content-between gy-4 mt-4">

        <div class="col-lg-8">

            <div class="portfolio-description">
            <div style="display:flex; justify-content: space-between;">
            <div>
            <h2>{{product.name}}</h2>
            </div>
            <div>
            <h2>${{product.price}}</h2>
            <p style="background-color:#feb900; cursor:not-allowed;" class="p-3 text-center text-white">{{product.status}}</p>
            </div>
            </div>
            <p class="text-uppercase" style="color:#feb900">Property Description</p>
            <p>{{product.description}}</p>

            <p class="text-uppercase" style="color:orange">Payment Plan </p>
            <p>{{product.payment_plan}}</p>
            
            <div style="display:flex; justify-content: space-between;">
                <div>
            <p class="text-uppercase" style="color:#feb900">Contact Number </p>
            <p>{{product.contact_number}}</p>
        </div>
        <div>
            <p class="text-uppercase" style="color:#feb900">Toll Free Number </p>
            <p>{{product.toll_free_number}}</p>
        </div>
        </div>

            </div>
        </div>

          <div class="col-lg-3">
            <div class="portfolio-info">
              <h3>Features</h3>
              <ul>
                <li><span>CCTV</span></li>
                <li><span>DWARF FENCING</span></li>
                <li><span>GATED ESTATE</span></li>
                <li><span>RECREATIONAL AREA</span></li>
                <li><span>24 HOUR SECURITY</span></li>
        
                <li><a href="/contact" class="btn-visit align-self-start">Book A Survey</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Projet Details Section -->

    
    <!-- ======= Servie Cards Section ======= -->
    <hr>
    <section id="services-cards" class="services-cards">
      <div class="container" data-aos="fade-up">
        <h1 class="text-center mb-5">Property Details</h1>
        <div class="row gy-4">
            <div class="col-lg-4 col-md-6 " data-aos="zoom-in" data-aos-delay="100">
            <h3 style="color: #feb900;">Property Type</h3>
            <h4 class="text-capitalize">{{product.property_type}}</h4>
            
          </div><!-- End feature item-->
            
          <div class="col-lg-2 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <h3 style="color: #feb900;">Bathrooms</h3>
            <h4>{{product.baths}}</h4>
            
          </div><!-- End feature item-->
          <div class="col-lg-3 col-md-6 " data-aos="zoom-in" data-aos-delay="100">
            <h3 style="color: #feb900;">Bedrooms</h3>
            <h4>{{product.beds}}</h4>
            
          </div><!-- End feature item-->
          <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <h3 style="color: #feb900;">Car Parking</h3>
            <h4>{{product.cars}}</h4>
            
          </div><!-- End feature item-->
          

         

        </div>

      </div>
    </section><!-- End Servie Cards Section -->

        <!-- ======= Services Section ======= -->
        <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item  position-relative">
              <div class="icon">
                <i class="fa-solid fa fa-bath"></i>
              </div>
              
              <p>All bathrooms are equipped with state of the art fixtures with the master bathroom particularly fitted with Jacuzzi.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa fa-radio"></i>
              </div>
              <p>The kitchen boasts of well fitted cabinets with extractor hood over the cooker place, Split unit A/C, Gas stove, Oven and Microwave.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa fa-camera"></i>
              </div>
              <p>All homes come fully equipped with CCTV, Speakers and Video Door Phone for effective survelliance and monitoring.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa fa-tree"></i>
              </div>
              <p>Proximity to existing recreational services. Such as Lekki Conservation Centre and Shoprite mall.</p>
            </div>
          </div><!-- End Service Item -->

        

        </div>

    </div>
    </section><!-- End Services Section -->

    
    </div>
</template>

<script>
    import axios from 'axios'
    import Navbar from '../components/Navbar.vue'
export default {
    name : 'Property',
    data(){
        return{
            product : []
        }
    },
    components : {
        Navbar
    },
    mounted(){
        this.getProduct()
    },
    methods : {
        getProduct(){
            let id = this.$route.params.id
            axios.get(`https://romax-backend-app.herokuapp.com/api/product/${id}`)
            .then(response => {
                this.product = response.data
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>