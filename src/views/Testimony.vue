<template>
  <div
    class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 transform duration-300 opacity-0 translate-y-32 mt-10 rounded rounded-xl pb-10"
    data-class-in="translate-y-0 opacity-100"
    data-class-out="translate-y-32 opacity-0"
    :class="{ 'mt-10': isMobileDevice(), 'mb-2': isDesktopDevice() }"
  >
    <div
      class="transition card-list-blur-custome pt-8 grid justify-items-center"
      :class="{ 'mt-0': isMobileDevice(), 'mt-1': isDesktopDevice() }"
    >
      <p class="font-semibold text-center mb-2 text-gray-500">TESTIMONIES</p>
      <p class="font-semibold text-center text-2xl text-white mb-8">
        What team mate says about me?
      </p>
      <carousel
        class="flex w-94 justify-items-center"
        :per-page="1"
        :mouse-drag="true"
        :speed="500"
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="5000"
        :paginationEnabled="false"
      >
        <slide>
          <div
            :class="{
              'grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-10': isDesktopDevice(),
              'grid grid-cols-1 gap-1  mt-10': isMobileDevice(),
            }"
          >
            <div
              class="max-w-md w-full lg:flex transform duration-1000 opacity-0 translate-y-32"
              data-class-in="translate-y-0 opacity-100"
              data-class-out="translate-y-32 opacity-0"
            >
              <div
                class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
              >
                <div class="mb-8">
                  <p class="text-sm text-grey-dark flex items-center">
                    <svg
                      class="text-grey w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                      />
                    </svg>
                    Members only
                  </p>
                  <div class="text-black font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    v-img
                    class="w-10 h-10 z-50 float rounded-full mr-4 transform transition duration-1000 hover:scale-1000 cursor-pointer"
                    src="../assets/svg/me.png"
                    alt="Avatar of Ilham Fatiri"
                  />
                  <div class="text-sm">
                    <p class="text-black leading-none">Ilham Fatiri</p>
                    <p class="text-grey-dark">January 06 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="max-w-md w-full lg:flex transform duration-1000 opacity-0 translate-y-32"
              data-class-in="translate-y-0 opacity-100"
              data-class-out="translate-y-32 opacity-0"
            >
              <div
                class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
              >
                <div class="mb-8">
                  <p class="text-sm text-grey-dark flex items-center">
                    <svg
                      class="text-grey w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                      />
                    </svg>
                    Members only
                  </p>
                  <div class="text-black font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    v-img
                    class="w-10 h-10 z-50 float rounded-full mr-4 transform transition duration-1000 hover:scale-1000 cursor-pointer"
                    src="../assets/svg/me.png"
                    alt="Avatar of Ilham Fatiri"
                  />
                  <div class="text-sm">
                    <p class="text-black leading-none">Ilham Fatiri</p>
                    <p class="text-grey-dark">January 06 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="max-w-md w-full lg:flex transform duration-1000 opacity-0 translate-y-32"
              data-class-in="translate-y-0 opacity-100"
              data-class-out="translate-y-32 opacity-0"
            >
              <div
                class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
              >
                <div class="mb-8">
                  <p class="text-sm text-grey-dark flex items-center">
                    <svg
                      class="text-grey w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                      />
                    </svg>
                    Members only
                  </p>
                  <div class="text-black font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    v-img
                    class="w-10 h-10 z-50 float rounded-full mr-4 transform transition duration-1000 hover:scale-1000 cursor-pointer"
                    src="../assets/svg/me.png"
                    alt="Avatar of Ilham Fatiri"
                  />
                  <div class="text-sm">
                    <p class="text-black leading-none">Ilham Fatiri</p>
                    <p class="text-grey-dark">January 06 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div
            :class="{
              'grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-10': isDesktopDevice(),
              'grid grid-cols-1 gap-1  mt-10': isMobileDevice(),
            }"
          >
            <div
              class="max-w-md w-full lg:flex transform duration-1000 opacity-0 translate-y-32"
              data-class-in="translate-y-0 opacity-100"
              data-class-out="translate-y-32 opacity-0"
            >
              <div
                class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
              >
                <div class="mb-8">
                  <p class="text-sm text-grey-dark flex items-center">
                    <svg
                      class="text-grey w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                      />
                    </svg>
                    Members only
                  </p>
                  <div class="text-black font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    v-img
                    class="w-10 h-10 z-50 float rounded-full mr-4 transform transition duration-1000 hover:scale-1000 cursor-pointer"
                    src="../assets/svg/me.png"
                    alt="Avatar of Ilham Fatiri"
                  />
                  <div class="text-sm">
                    <p class="text-black leading-none">Ilham Fatiri</p>
                    <p class="text-grey-dark">January 06 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="max-w-md w-full lg:flex transform duration-1000 opacity-0 translate-y-32"
              data-class-in="translate-y-0 opacity-100"
              data-class-out="translate-y-32 opacity-0"
            >
              <div
                class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
              >
                <div class="mb-8">
                  <p class="text-sm text-grey-dark flex items-center">
                    <svg
                      class="text-grey w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                      />
                    </svg>
                    Members only
                  </p>
                  <div class="text-black font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    v-img
                    class="w-10 h-10 z-50 float rounded-full mr-4 transform transition duration-1000 hover:scale-1000 cursor-pointer"
                    src="../assets/svg/me.png"
                    alt="Avatar of Ilham Fatiri"
                  />
                  <div class="text-sm">
                    <p class="text-black leading-none">Ilham Fatiri</p>
                    <p class="text-grey-dark">January 06 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="max-w-md w-full lg:flex transform duration-1000 opacity-0 translate-y-32"
              data-class-in="translate-y-0 opacity-100"
              data-class-out="translate-y-32 opacity-0"
            >
              <div
                class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
              >
                <div class="mb-8">
                  <p class="text-sm text-grey-dark flex items-center">
                    <svg
                      class="text-grey w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                      />
                    </svg>
                    Members only
                  </p>
                  <div class="text-black font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    v-img
                    class="w-10 h-10 z-50 float rounded-full mr-4 transform transition duration-1000 hover:scale-1000 cursor-pointer"
                    src="../assets/svg/me.png"
                    alt="Avatar of Ilham Fatiri"
                  />
                  <div class="text-sm">
                    <p class="text-black leading-none">Ilham Fatiri</p>
                    <p class="text-grey-dark">January 06 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import Animasection from "../service/animation";
import { isDesktop, isMobilePhone } from "../service/device";
import IconSvg from "../assets/svg/index.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    IconSvg,
    Carousel,
    Slide,
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
};
</script>
