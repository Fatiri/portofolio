<template>
  <div id="app" class="font-poppins">
    <div id="nav">
      <nav-bar />
      <hero />
    </div>
    <skill />
    <service-client />
    <contact />
    <contact-us />
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Hero from "./views/Hero.vue";
import Skill from "./views/Skill.vue";
import ServiceClient from "./views/ServiceClient.vue";
import Contact from "./views/Contact.vue";
import ContactUs from "./views/ContactUs.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Hero,
    Skill,
    ServiceClient,
    Contact,
    ContactUs,
    FooterBar,
  },
};
</script>

<style scoped>
#app {
  position: relative;
  background: linear-gradient(176.67deg, #0be4d613 -140.7%, #242323 5.15%);
}
</style>

