<template>
  <div
    class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
    :class="{ 'pb-1': isMobileDevice(), 'pb-2': isDesktopDevice() }"
  >
    <div class="grid grid-rows-1 grid-flow-col gap-6">
      <div
        class="-mx-3 md:flex items-center mt-16 justify-center"
        :class="{ 'mb-5 ': isMobileDevice(), 'mb-16 ml-24': isDesktopDevice() }"
      >
        <div
          class="md:w-1/1 px-3 mb-6 md:mb-0"
          :class="{ 'shadow-lg pb-10': isMobileDevice() }"
        >
          <div :class="{ 'px-6 ': isMobileDevice() }">
            <div class="profile shadow-md"></div>
            <img
              class="profile-image bounce opacity-70 cursor-pointer"
              src="../assets/svg/me.png"
              alt="Ilham Fatiri"
            />
            <div class="line-profile"></div>
            <div
              class="-mx-3 flex mt-1 justify-center"
              :class="{ 'mb-0': isMobileDevice(), 'mb-6': isDesktopDevice() }"
            >
              <div
                class="md:w-1/1 transform transition duration-500 hover:scale-125"
              >
                <a href="https://github.com/Fatiri" target="_blank">
                  <icon-svg class="mt-2" name="github" width="34" height="34" />
                </a>
              </div>
              <div
                class="md:w-1/1 px-3 custome-download-icon-sosmed transform transition duration-500 hover:scale-125"
              >
                <a href="https://www.linkedin.com/in/fatiri" target="_blank">
                  <icon-svg
                    class="mt-2 ml-10"
                    name="linkedin"
                    width="34"
                    height="34"
                  />
                </a>
              </div>
              <div
                class="md:w-1/1 px-3 custome-download-icon-sosmed transform transition duration-500 hover:scale-125"
              >
                <a href="https://www.instagram.com/ifatiri" target="_blank">
                  <icon-svg
                    class="mt-2 ml-10"
                    name="instagram"
                    width="34"
                    height="34"
                  />
                </a>
              </div>
              <div
                class="md:w-1/1 px-3 custome-download-icon-sosmed transform transition duration-500 hover:scale-125"
              >
                <a href="https://wa.link/e1raiy" target="_blank">
                  <icon-svg
                    class="mt-2 ml-10"
                    name="whatsup"
                    width="34"
                    height="34"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="md:w-1/1 px-3 lg:ml-28 md:ml-10 content-top"
          :class="{ 'mt-1': isMobileDevice(), 'lg:mt-10 md:mt-10': isDesktopDevice() }"
        >
          <div class="text-green-400 text-3xl mb-3">Hi, I'm Ilham Fatiri</div>
          <div class="text-white lg:text-4xl md:text-3xl">
            Software Engineer
          </div>
          <div class="text-white lg:text-4xl md:text-3xl lg:w-9/12">
            At Lion Parcel
          </div>
          <p
            class="mt-2 text-gray-500 lg:text-1xl md:text-sm mt-4 lg:w-10/12 md:w-10/12"
          >
            &nbsp;&nbsp;&nbsp;is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>

          <div
            class="flex"
            :class="{ 'mb-0 mt-5': isMobileDevice(), '-mx-3 mb-6': isDesktopDevice() }"
          >
            <div
              class="md:w-1/1 custome-download-icon px-3 mb-6 md:mb-0 underline ..."
            >
              <icon-svg class="mt-6 transform transition duration-500 hover:scale-125 cursor-pointer" name="download" width="28" height="28" />
            </div>
            <div class="md:w-1/2 px-3">
              <div class="text-white text-lg mt-6">Download CV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "../assets/svg/index.vue";

import { isDesktop, isMobilePhone } from "../utils/device";
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

<style scoped>
.profile {
  width: 320px;
  height: 350px;
  filter: blur(2px);
  -webkit-filter: blur(20px);
  background: rgba(230, 225, 225, 0.158);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
}

@media (max-width: 640px) {
  .profile {
    width: 320px;
    height: 350px;
    margin-left: 15px;
    filter: blur(2px);
    -webkit-filter: blur(4px);
    background: rgba(114, 98, 98, 0.055);
    box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.062);
  }
  .line-profile {
    height: 4px;
    width: 320px;
    margin-left: 15px;
    background-color: rgba(255, 255, 255, 0.418);
    margin-top: -8px;
  }

  .profile-image {
    float: inline-start;
    align-items: fixed;
    margin-top: -375px;
    margin-left: 50px;
    width: 240px;
    transform: rotate(-2deg);
    height: 380px;
    filter: blur(0px);
    -webkit-filter: blur(0px);
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: 380px bottom;
  }
  .content-top {
    margin-left: 20px;
    margin-top: 70px;
  }
}
.profile-image {
  float: inline-start;
  align-items: fixed;
  margin-top: -375px;
  width: 240px;
  height: 380px;
  margin-left: 36px;
  filter: blur(0px);
  transform: rotate(-1deg);
  -webkit-filter: blur(0px);
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
}
.bounce:hover {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateX(-20px);
  }
  50% {
    transform: rotate(-1deg);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateY(0);
  }
}
.line-profile {
  height: 4px;
  width: 315px;
  background-color: rgba(255, 255, 255, 0.308);
  margin-top: -7.8px;
}
.text-content {
  color: #918e96;
}
.custome-download-icon {
  margin-right: -15px;
}
.custome-download-icon-sosmed {
  margin-right: -10px;
}

.container-text-detail {
  width: 550px;
}
</style>
