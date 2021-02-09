<template>
  <div id="app" class="font-poppins">
    <div id="nav">
      <nav-bar />
      <hero />
    </div>
    <skill />
    <service-client />
    <project/>
    <contact />
    <testimony />
    <contact-us />
    <footer-bar />
    <arrow-scroll v-if="isDesktopDevice()"/>
  </div>
</template>

<script>
import { isDesktop, isMobilePhone } from "./service/device";
import NavBar from "./components/NavBar.vue";
import Hero from "./views/Hero.vue";
import Skill from "./views/Skill.vue";
import ServiceClient from "./views/ServiceClient.vue";
import Contact from "./views/Contact.vue";
import Testimony from "./views/Testimony.vue";
import ContactUs from "./views/ContactUs.vue";
import FooterBar from "./components/FooterBar.vue";
import ArrowScroll from "./components/ArrowScroll.vue";
import Project from "./views/Project.vue"
export default {
  name: "App",
  components: {
    NavBar,
    Hero,
    Skill,
    ServiceClient,
    Contact,
    Testimony,
    ContactUs,
    FooterBar,
    ArrowScroll,
    Project
  },
   methods: {
    isMobileDevice() {
      return isMobilePhone();
    },
    isDesktopDevice() {
      return isDesktop();
    },
  },
};
</script>

<style scoped>
#app {
  position: relative;
  background: linear-gradient(176.67deg, #0be4d613 -140.7%, #242323 5.15%);
}
</style>

