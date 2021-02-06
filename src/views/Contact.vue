<template>
  <div
    class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 transform duration-300 opacity-0 translate-y-32 bg-gray-100 rounded bg-opacity-5 rounded rounded-xl"
    data-class-in="translate-y-0 opacity-100"
    data-class-out="translate-y-32 opacity-0"
    :class="{ 'mt-10': isMobileDevice(), 'mb-2': isDesktopDevice() }"
  >
    <div
      class="grid lg:grid-cols-2 md:grid-cols-1 gap-4 pt-8 pb-8"
      :class="{ 'mt-0': isMobileDevice(), 'mt-16': isDesktopDevice() }"
    >
      <div
        class="ransform duration-100 opacity-0 translate-y-32"
        data-class-in="translate-y-0 opacity-100"
        data-class-out="translate-y-32 opacity-0"
      >
        <p class="font-semibold text-left text-3xl mb-2 text-green-600"
         :class="{ 'pr-3 pl-3': isMobileDevice()}"
        >
          Have a project on your mind.
        </p>
        <p class="font-semibold text-left text-md text-gray-500"
        :class="{ 'pr-3 pl-3': isMobileDevice()}"
        >
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly.
        </p>
      </div>
      <div class="grid  pt-8"
      :class="{ 'justify-items-center': isMobileDevice(), 'lg:justify-items-end md:justify-items-start': isDesktopDevice() }"
      >
        <div
          class="bg-green-600 rounded w-40 text-center text-sm h-12 pt-2 hover:shadow-lg flex cursor-pointer duration-4 transform transition duration-1000 hover:scale-110"
        >
          <div
            class="ransform duration-100 opacity-0 translate-y-32"
            data-class-in="translate-y-0 opacity-100"
            data-class-out="translate-y-32 opacity-0"
          >
            <icon-svg
              class="ml-4 animate-pulse"
              name="mailicon"
              width="40"
              height="40"
            />
          </div>
          <p class="mt-1 text-bold text-white">Contact Me</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "../assets/svg/index.vue";

import { isDesktop, isMobilePhone } from "../service/device";
export default {
  components: {
    IconSvg,
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