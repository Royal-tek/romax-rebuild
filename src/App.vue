<template>
  <div id="nav">
  </div>
  <router-view/>
  
  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <Footer/>
</template>


<script>
  // import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
export default {
  components : {
    Footer
  }
}
</script>

<style lang="scss">

</style>
