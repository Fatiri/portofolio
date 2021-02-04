<template>
  <div id="app" class="font-poppins">
    <div id="nav">
      <nav-bar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
#app {
  position: relative;
  height: 12000px;
  background: linear-gradient(150.67deg, #05e7d475 -90.7%, #000000 20.15%);
}
</style>

