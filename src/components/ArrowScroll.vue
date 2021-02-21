<template>
  <div
    @click="scrollTop"
    v-show="visible"
    class="float-bottom-to-top cursor-pointer transform transition duration-500 hover:scale-125"
  >
    <icon-svg
      class="mt-6 animate-bounce opacity-50"
      name="arrowtopcircleicon"
      width="55"
      height="55"
    />
  </div>
</template>

<script>
import IconSvg from "../assets/svg/index.vue";
export default {
  components: {
    IconSvg,
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    scrollTop: function () {
      window.scroll(0, 0);
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150;
    },
  },
};
</script>

<style scoped>
.float-bottom-to-top {
  position: fixed;
  bottom: 1px;
  right: 20px;
  cursor: pointer;
}
</style>