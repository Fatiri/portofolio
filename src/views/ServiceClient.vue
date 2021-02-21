<template>
  <div
    id="service"
    class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 transform duration-1000 opacity-0 translate-y-10 mt-10 mb-28"
    data-class-in="translate-y-0 opacity-100"
    data-class-out="translate-y-5 opacity-0"
  >
    <div class="lg:mt-8 md:mt-8 transition">
      <p class="font-semibold text-center mb-2 text-gray-500 animate-pulse">I AM GRAT AT</p>
      <p class="font-semibold text-center text-2xl text-white">
        I do awesome services for our clients
      </p>

      <div
        :class="{
          'grid lg:grid-cols-4 md:grid-cols-3 gap-4 mt-10': isDesktopDevice(),
          'grid grid-cols-1 gap-1  mt-10': isMobileDevice(),
        }"
      >
        <div
          v-for="(serviceClient, index) in SERVICE_CLIENT"
          :key="index"
          class="container mx-auto max-w-sm flex flex-col space-y-4 justify-center items-center transform duration-1000 opacity-0 translate-y-32"
          data-class-in="translate-y-0 opacity-100"
          data-class-out="translate-y-32 opacity-0"
        >
          <div
            class="bg-white w-full flex items-center p-2 rounded-xl shadow border"
          >
            <div class="flex items-center space-x-4">
              <icon-svg
                class="flex self-center rounded-full shadow-sm"
                :name="serviceClient.icon"
                width="40"
                height="40"
              />
            </div>
            <div class="p-3">
              <div class="font-semibold text-gray-700">
                {{ serviceClient.title }}
              </div>
              <div class="text-sm text-gray-500">
                {{ serviceClient.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Animasection from "../utils/animation";
import IconSvg from "../assets/svg/index.vue";
import { mapGetters } from "vuex";
import { isDesktop, isMobilePhone } from "../utils/device";

export default {
  components: {
    IconSvg,
  },

  mounted() {
    this.loadAnimation();
  },

  methods: {
    loadAnimation() {
      Animasection.observeAll();
    },
    isMobileDevice() {
      return isMobilePhone();
    },
    isDesktopDevice() {
      return isDesktop();
    },
  },
  computed: {
    ...mapGetters(["SERVICE_CLIENT"]),
  },
};
</script>