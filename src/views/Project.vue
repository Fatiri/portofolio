<template>
  <div
    id="service"
    class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 transform duration-1000 opacity-0 translate-y-10 mt-10 mb-10 pt-2 pb-10 bg-white bg-opacity-5 rounded rounded-md"
    data-class-in="translate-y-0 opacity-100"
    data-class-out="translate-y-5 opacity-0"
  >
    <div class="lg:mt-8 md:mt-8 transition">
      <p class="font-semibold text-center mb-2 text-gray-500">
        ACCOMPLISHMENTS
      </p>
      <p class="font-semibold text-center text-2xl text-white">Selected Projects</p>

      <div
        :class="{
          'grid lg:grid-cols-1 md:grid-cols-1 gap-4 mt-10': isDesktopDevice(),
          'grid grid-cols-1 gap-1  mt-10': isMobileDevice(),
        }"
      >
        <carousel
          class="flex w-94 justify-items-center"
          :per-page="1"
          :mouse-drag="true"
          :speed="500"
          :autoplay="true"
          :loop="true"
          :autoplayTimeout="5000"
        >
          <slide>
            <div
              :class="{
                'grid lg:grid-cols-4 md:grid-cols-2 gap-3': isDesktopDevice(),
                'grid grid-cols-1 gap-1  mt-10': isMobileDevice(),
              }"
            >
              <div
                class="container h-auto lg:flex transform duration-1000 opacity-0 translate-y-32 hover:shadow-xl cursor-pointer"
                data-class-in="translate-y-0 opacity-100"
                data-class-out="translate-y-32 opacity-0"
              >
                <div
                  class="bg-white container w-full rounded-md flex flex-col justify-between leading-normal"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
                    background-repeat: no-repat;
                    background-size: cover;
                    background-blend-mode: multiply;
                  "
                >
                  <div class="py-20 bg-black bg-opacity-0 hover:bg-opacity-50">
                    <p class="text-green-500 font-bold text-2xl text-center">Lion Parcel</p>
                  </div>
                </div>
              </div>
              <div
                class="container h-auto lg:flex transform duration-1000 opacity-0 translate-y-32 hover:shadow-xl cursor-pointer"
                data-class-in="translate-y-0 opacity-100"
                data-class-out="translate-y-32 opacity-0"
              >
                <div
                  class="bg-white container w-full rounded-md flex flex-col justify-between leading-normal"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
                    background-repeat: no-repat;
                    background-size: cover;
                    background-blend-mode: multiply;
                  "
                >
                  <div class="py-20 bg-black bg-opacity-0 hover:bg-opacity-50">
                    <p class="text-green-500 font-bold text-2xl text-center">Lion Parcel</p>
                  </div>
                </div>
              </div>
              <div
                class="container h-auto lg:flex transform duration-1000 opacity-0 translate-y-32 hover:shadow-xl cursor-pointer"
                data-class-in="translate-y-0 opacity-100"
                data-class-out="translate-y-32 opacity-0"
              >
                <div
                  class="bg-white container w-full rounded-md flex flex-col justify-between leading-normal"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
                    background-repeat: no-repat;
                    background-size: cover;
                    background-blend-mode: multiply;
                  "
                >
                  <div class="py-20 bg-black bg-opacity-0 hover:bg-opacity-50">
                    <p class="text-green-500 font-bold text-2xl text-center">Lion Parcel</p>
                  </div>
                </div>
              </div>
              <div
                class="container h-auto lg:flex transform duration-1000 opacity-0 translate-y-32 hover:shadow-xl cursor-pointer"
                data-class-in="translate-y-0 opacity-100"
                data-class-out="translate-y-32 opacity-0"
              >
                <div
                  class="bg-white container w-full rounded-md flex flex-col justify-between leading-normal"
                  style="
                    background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
                    background-repeat: no-repat;
                    background-size: cover;
                    background-blend-mode: multiply;
                  "
                >
                  <div class="py-20 bg-black bg-opacity-0 hover:bg-opacity-50">
                    <p class="text-green-500 font-bold text-2xl text-center">Lion Parcel</p>
                  </div>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Animasection from "../service/animation";
import IconSvg from "../assets/svg/index.vue";
import { mapGetters } from "vuex";
import { isDesktop, isMobilePhone } from "../service/device";
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
  computed: {
    ...mapGetters(["SERVICE_CLIENT"]),
  },
};
</script>
