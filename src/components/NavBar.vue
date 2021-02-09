<template>
  <nav class="lg:py-3" id="navbar">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-1">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <icon-svg name="title" width="30" height="30" />
            <div class="text-white px-2 text-xl font-bold">Ilham fatiri</div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <div
                class="text-gray-300 cursor-pointer hover:text-white px-3 py-2 rounded-md text-lg font-semibold transform transition duration-500 hover:scale-125"
                >About Me</div
              >
              <div
                class="text-gray-300 cursor-pointer hover:text-white px-3 py-2 rounded-md text-lg font-semibold transform transition duration-500 hover:scale-125"
                @click="scrollTo('skill')"
                >Skills</div
              >
              <div
                class="text-gray-300 cursor-pointer  hover:text-white px-3 py-2 rounded-md text-lg font-semibold transform transition duration-500 hover:scale-125"
                @click="scrollTo('service')"
                >Service</div
              >
               <div
                class="text-gray-300 cursor-pointer  hover:text-white px-3 py-2 rounded-md text-lg font-semibold transform transition duration-500 hover:scale-125"
                >Projects</div
              >
              <div
                class="text-gray-300 cursor-pointer hover:text-white px-3 py-2 rounded-md text-lg font-semibold transform transition duration-500 hover:scale-125"
                 @click="scrollTo('contact')"
                >Contact</div
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
    <div class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Team</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Projects</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import IconSvg from "../assets/svg/index.vue";
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
    scrollTo(nameComponent){
      if (nameComponent === "skill"){
        window.scroll(0,400)
      } else if (nameComponent === "service"){
        window.scroll(0,900)
      }else if (nameComponent === "contact"){
        window.scroll(0,2400)
      }
    }
  },
};
</script>