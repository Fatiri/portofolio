<template>
  <div
    class="mx-auto px-2 sm:px-6 lg:px-8 transform duration-300 opacity-0 translate-y-32 mt-10 rounded rounded-xl pb-10 mb-28"
    data-class-in="translate-y-0 opacity-100"
    data-class-out="translate-y-32 opacity-0"
    :class="{ 'mt-10 max-w-full': isMobileDevice(), 'mb-2 max-w-7xl': isDesktopDevice() }"
  >
    <div
      class="transition card-list-blur-custome pt-8 grid justify-items-center"
      :class="{ 'mt-0': isMobileDevice(), 'mt-1': isDesktopDevice() }"
    >
      <p
        class="font-semibold text-center mb-2 text-gray-500 transform duration-1000 opacity-0 translate-y-32 animate-pulse"
        data-class-in="translate-y-0 opacity-100"
        data-class-out="translate-y-32 opacity-0"
      >
        CONTACT ME
      </p>
      <p
        class="font-semibold text-center text-2xl text-white mb-4 transform duration-1000 opacity-0 translate-y-32"
        data-class-in="translate-y-0 opacity-100"
        data-class-out="translate-y-32 opacity-0"
      >
        Have a Project?
      </p>
      <div
        id="contact"
        class="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 bg-white bg-opacity-10 transform duration-1000 opacity-0 translate-y-32"
        :class="{ 'w-full': isMobileDevice(), 'w-1/2': isDesktopDevice() }"
        data-class-in="translate-y-0 opacity-100"
        data-class-out="translate-y-32 opacity-0"
      >
        <div class="-mx-3 md:flex mb-6">
          <div
            class="md:w-1/2 px-3 mb-6 md:mb-0 transform duration-1000 opacity-0 translate-y-32"
            data-class-in="translate-y-0 opacity-100"
            data-class-out="translate-y-32 opacity-0"
          >
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Your Name
            </label>
            <input
              v-model="MESSAGE.name"
               @input="onInput()"
              class="appearance-none block text-black w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Your Name"
            />
            <p v-if="MESSAGE_INVALID_OBJECT.name !== ''" class="text-red-600">
              {{ MESSAGE_INVALID_OBJECT.name }}
            </p>
          </div>
          <div
            class="md:w-1/2 px-3 transform duration-1000 opacity-0 translate-y-32"
            data-class-in="translate-y-0 opacity-100"
            data-class-out="translate-y-32 opacity-0"
          >
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Your Email
            </label>
            <input
              v-model="MESSAGE.email"
               @input="onInput()"
              class="appearance-none block w-full text-black outline-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="email"
              placeholder="Your Email"
            />
            <p v-if="MESSAGE_INVALID_OBJECT.email !== ''" class="text-red-600">
              {{ MESSAGE_INVALID_OBJECT.email }}
            </p>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div
            class="md:w-full px-3 transform duration-1000 opacity-0 translate-y-32"
            data-class-in="translate-y-0 opacity-100"
            data-class-out="translate-y-32 opacity-0"
          >
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-password"
            >
              Subject
            </label>
            <input
              v-model="MESSAGE.subject"
              @input="onInput()"
              class="appearance-none block text-black w-full outline-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-password"
              type="text"
              placeholder="Subject"
            />
            <p
              v-if="MESSAGE_INVALID_OBJECT.subject !== ''"
              class="text-red-600"
            >
              {{ MESSAGE_INVALID_OBJECT.subject }}
            </p>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div
            class="md:w-full px-3 transform duration-1000 opacity-0 translate-y-32"
            data-class-in="translate-y-0 opacity-100"
            data-class-out="translate-y-32 opacity-0"
          >
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              v-model="MESSAGE.text"
              @input="onInput()"
              class="appearance-none block text-black outline-none w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-password"
              type="text"
              placeholder="Message"
            />
            <p v-if="MESSAGE_INVALID_OBJECT.text !== ''" class="text-red-600">
              {{ MESSAGE_INVALID_OBJECT.text }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="duration-4 transform transition duration-1000 hover:scale-110 transform duration-1000 opacity-0 translate-y-32"
        data-class-in="translate-y-0 opacity-100"
        data-class-out="translate-y-32 opacity-0"
      >
        <button
          v-if="!BUTTON_SEND_STATUS"
          @click="onSendMessage()"
          class="bg-green-600 text-black w-52 h-12 rounded-md flex focus:outline-none"
        >
          <icon-svg
            class="flex mt-1 ml-7 self-center rounded-full shadow-sm animate-pulse"
            name="sendmessageicon"
            width="35"
            height="35"
          />
          <div class="ml-1 mt-3 text-md text-white">Send Message</div>
        </button>
        <button
          v-if="BUTTON_SEND_STATUS"
          class="bg-green-600 text-black disabled:opacity-50 cursor-default w-52 h-12 rounded-md flex focus:outline-none"
        >
          <icon-svg
            class="flex mt-1 ml-24 self-center rounded-full shadow-sm animate-pulse"
            name="loading"
            width="25"
            height="25"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Animasection from "../utils/animation";
import { isDesktop, isMobilePhone } from "../utils/device";
import IconSvg from "../assets/svg/index.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    IconSvg,
  },

  mounted() {
    this.loadAnimation();
  },

  methods: {
    ...mapActions(["handleSendMessage", "handleInput"]),
    loadAnimation() {
      Animasection.observeAll();
    },
    isMobileDevice() {
      return isMobilePhone();
    },
    isDesktopDevice() {
      return isDesktop();
    },
    onInput(){
      this.handleInput()
    },
    onSendMessage() {
      this.handleSendMessage();
    },
  },
  computed: {
    ...mapGetters(["BUTTON_SEND_STATUS"]),
    ...mapGetters(["MESSAGE", "MESSAGE_INVALID_OBJECT"]),
  },
};
</script>
