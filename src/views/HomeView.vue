<template>
  <div class="container mx-auto font-base">
   <Navbar/>
    <div class="lg:flex justify-center items-center">
      <div class="bg-white lg:w-1/2 rounded h-48 mx-4 flex flex-col gap-4 mt-[300px]">
      <h1 class="text-4xl ml-4 mt-3 font-extrabold">Flore Farms</h1>
      <p class="ml-4">Specialising in multiple varieties of tulips, this farm is most popular in the spring.</p>
      <button @click="goToFlowers" class="bg-[#101014] ml-4 text-white px-6 py-1.5 rounded mr-4">Browse flowers</button>
    </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'Home',
  components: {
    Navbar
},
data() {
  return {

  }
},
methods: {
  goToFlowers() {
    this.$router.push({"name": "flowers"})
  }
},
mounted() {

}
}
</script>

<style>
body {
  /* background-image: url('~@/assets/tlip.jpg');
  height: 90vh; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; */
 
  background-color: #f1f3f1;

}
</style>