<template>
  <div id="app" class="font-poppins">
    <div id="nav">
      <nav-bar />
      <hero />
    </div>
    <skill />
    <service-client />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Hero from "./views/Hero.vue";
import Skill from "./views/Skill.vue";
import ServiceClient from "./views/ServiceClient.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Hero,
    Skill,
    ServiceClient,
  },
};
</script>

<style scoped>
#app {
  height: 1900px;
  position: relative;
  background: linear-gradient(176.67deg, #0be4d613 -140.7%, #242323 5.15%);
}
</style>

