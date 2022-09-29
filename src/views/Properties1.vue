<template>
    <div class="holder">
        <Navbar/>
            <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs d-flex align-items-center" style="background-image: url('assets/img/breadcrumbs-bg.jpg');">
      <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Romax Homes 10</h2>
        <ol>
          <li><a href="index.html">Home</a></li>
          <li>Romax Homes 10</li>
        </ol>

      </div>
    </div><!-- End Breadcrumbs -->
    <section id="projects" class="projects">
      <div class="container" data-aos="fade-up">

    

        <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
            <div class="portfolio-content h-100">
                <img src="assets/images/11.jpg" class="img-fluid" style="height: 100%;" alt="">
                <div class="portfolio-info">
                <h4 class="text-uppercase">Sold Out</h4>
                <p>3 BEDROOM TERRACE DUPLEX</p>
                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
            </div>
            </div><!-- End Projects Item -->

        

        <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
            <div class="portfolio-content h-100">
                <img src="assets/images/13.jpg" class="img-fluid" style="height: 100%;" alt="">
                <div class="portfolio-info">
                <h4 class="text-uppercase">Price Increase</h4>
                <p>4 BEDROOM TERRACE DUPLEX</p>
                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
            </div>
        </div><!-- End Projects Item -->




          </div><!-- End Projects Container -->

        </div>

      
    </section><!-- End Our Projects Section -->
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
export default {
    name : 'Romax10',
    components : {
        Navbar
    }
}
</script>