<template>
    <div class="holder">
        <Navbar/>
            <!-- ======= Breadcrumbs ======= -->
        <div class="breadcrumbs d-flex align-items-center" style="background-image: url('assets/img/breadcrumbs-bg.jpg');">
            <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

            <h2>Project Details</h2>
                <ol>
                <li><a href="index.html">Home</a></li>
                <li>Project Details</li>
                </ol>

            </div>
        </div><!-- End Breadcrumbs -->
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
export default {
    name : 'Property',
    components : {
        Navbar
    }
}
</script>

<style lang="scss" scoped>

</style>