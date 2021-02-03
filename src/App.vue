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
  background: linear-gradient(163.67deg, #6b0000 -70.7%, #000000 26.15%);
}
</style>

