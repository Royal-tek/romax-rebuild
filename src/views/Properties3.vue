<template>
    <div class="holder">
        <Navbar/>
            <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs d-flex align-items-center" style="background-image: url('/assets/images/13.jpg');">
      <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Imperial Oak</h2>
        <ol>
          <li><a href="/">Home</a></li>
          <li>Imperial Oak</li>
        </ol>

      </div>
    </div><!-- End Breadcrumbs -->
    <section id="projects" class="projects">
      <div class="container" data-aos="fade-up">

    

        <div class="row gy-4 " data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling" v-for="product in products" :key="product.id">
            <div class="portfolio-content h-100" v-if="product.product === 'Imperial Oak'">
                <img :src="product.image" class="img-fluid"  alt="">
                <div class="portfolio-info">
                <h4 class="text-uppercase">{{product.status}}</h4>
                <p>{{product.name}}</p>
                <a :href="`/property/${product.id}`" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
            </div>
            </div><!-- End Projects Item -->

        

 




          </div><!-- End Projects Container -->

        </div>

      
    </section><!-- End Our Projects Section -->
    </div>
</template>

<script>
    import axios from 'axios'
    import Navbar from '../components/Navbar.vue'
export default {
    name : 'Properties3',
    data(){
        return{
            products : []
        }
    },
    components : {
        Navbar
    },
    mounted(){
        this.getProducts()
    },
    methods : {
        getProducts(){
            axios.get('https://romax-backend-app.herokuapp.com/api/listsubproduct/')
            .then(response =>{
                let all_products = response.data
                this.products = all_products.filter(prod=> prod.product === 'Imperial Oak')
                console.log(response.data)
                console.log(this.products)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },

}
</script>