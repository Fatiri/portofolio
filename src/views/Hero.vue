<template>
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="grid grid-rows-3 grid-flow-col gap-6">
      <div
        class="-mx-3 md:flex mb-6 items-center mt-16 justify-center lg:ml-24 md:ml-24"
      >
        <div class="md:w-1/1 px-3 mb-6 md:mb-0">
          <div class="profile"></div>
          <img
            class="profile-image bounce"
            src="../assets/svg/me.png"
            alt="Ilham Fatiri"
          />
          <div class="line-profile"></div>
          <div class="-mx-3 flex mb-6 mt-1 justify-center">
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
        <div class="md:w-1/1 px-3 lg:mt-24 lg:ml-24 md:ml-12 md:mt-18 content-top">
          <div class="text-red-600 text-3xl mb-3">
            Hi, I'm Ilham Fatiri
          </div>
          <div class="text-white lg:text-4xl md:text-3xl ">Software Engineer</div>
          <div class="text-white lg:text-4xl  md:text-3xl lg:w-9/12">At Lion Parcel</div>
          <p class="mt-2 text-gray-500 lg:text-1xl md:text-sm mt-4 lg:w-10/12 md:w-10/12">
            &nbsp;&nbsp;&nbsp;I am a graduate of the Bootcamp Enigma Academy, I
            am educated not only to be someone who has knowledge in the field of
            software engineer, but also to become someone who has character,and
            can be useful to many people. One of my current dreams,wants to
            surpass one of my teachers.
          </p>

          <div class="-mx-3 flex mb-6">
            <div
              class="md:w-1/1 custome-download-icon px-3 mb-6 md:mb-0 underline ..."
            >
              <icon-svg class="mt-6" name="download" width="28" height="28" />
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
export default {
  components: {
    IconSvg,
  },
};
</script>

<style scoped>
.profile {
  width: 320px;
  height: 360px;
  filter: blur(2px);
  -webkit-filter: blur(4px);
  background: rgba(41, 22, 22, 0.54);
  box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.25);
}

@media(max-width: 640px) {
  .profile {
  width: 320px;
  height: 360px;
  margin-left: 15px;
  filter: blur(2px);
  -webkit-filter: blur(4px);
  background: rgba(41, 22, 22, 0.54);
  box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.25);
}
.line-profile {
  height: 2px;
  width: 320px;
  margin-left: 15px;
  background-color: white;
  margin-top: -7.8px;
}

.profile-image {
  float: inline-start;
  align-items: fixed;
  margin-top: -385px;
  margin-left: 50px;
  width: 240px;
  height: 380px;
  filter: blur(0px);
  -webkit-filter: blur(0px);
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin:380px bottom;
}
.content-top{
  margin-left: 20px;
 margin-top: 70px;
}
}
.profile-image {
  float: inline-start;
  align-items: fixed;
  margin-top: -385px;
  width: 240px;
  height: 380px;
  margin-left: 36px;
  filter: blur(0px);
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
    transform: translateX(15px);
  }
  100% {
    transform: translateY(0);
  }
}
.line-profile {
  height: 2px;
  width: 320px;
  background-color: white;
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
