<template>
  <div
    class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 transform duration-300 opacity-0 translate-y-32"
    data-class-in="translate-y-0 opacity-100"
    data-class-out="translate-y-32 opacity-0"
    :class="{ 'mt-10': isMobileDevice(), 'mb-2': isDesktopDevice() }"
  >
    <div
      class="transition"
      :class="{ 'mt-0': isMobileDevice(), 'mt-16': isDesktopDevice() }"
    >
      <p class="font-semibold text-center mb-2 text-gray-500">skills</p>
      <p class="font-semibold text-center text-2xl text-white">My Skills</p>
      <div :class="{ 'mt-1': isMobileDevice(), 'mt-5': isDesktopDevice() }">
        <draggable
          :list="SKILL"
          :animation="200"
          ghost-class="moving-card"
          group="users"
          filter=".action-button"
          tag="ul"
          :class="{
            'grid grid-cols-2': isMobileDevice(),
            'grid grid-cols-3': isDesktopDevice(),
          }"
        >
          <div
            v-for="(skill, index) in SKILL"
            :key="index"
            class="cursor-pointer py-1 w-full flex justify-center items-center transform duration-1000 opacity-0 translate-y-32"
            data-class-in="translate-y-0 opacity-100"
            data-class-out="translate-y-32 opacity-0"
          >
            <div
              class="rounded w-full hover:shadow-2xl duration-4 transform transition duration-500 hover:scale-125"
            >
              <div
                class="flex flex-row justify-center uppercase font-bold text-white pt-6"
              >
                <p>{{ skill.name }}</p>
              </div>
              <div class="p-2 pb-6 text-grey-darker text-justify flex flex-col">
                <icon-svg
                  :class="{ 'ml-9': skill.icon == 'golangicon' }"
                  class="flex self-center rounded-full shadow-sm"
                  :name="skill.icon"
                  width="120"
                  height="120"
                />
              </div>
            </div>
          </div>
        </draggable>
      </div>
      <div
        v-if="!BUTTON_SHOW"
        class="flex pt-10 justify-center shadow-sm py-10 transform transition duration-500 hover:scale-125"
      >
        <div @click="onChangeFullSkill()">
          <icon-svg
            class="animate-bounce cursor-pointer"
            name="doublearrowdownicon"
            width="28"
            height="28"
          />
        </div>
      </div>
      <div
        v-if="BUTTON_SHOW"
        class="flex pt-10 justify-center shadow-sm py-10 ransform transition duration-500 hover:scale-125"
      >
        <div @click="onChangeLessSkill()">
          <icon-svg
            class="animate-bounce cursor-pointer t"
            name="doublearrowupicon"
            width="28"
            height="28"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Animasection from "../service/animation";
import { isDesktop, isMobilePhone } from "../service/device";
import draggable from "vuedraggable";
import IconSvg from "../assets/svg/index.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    draggable,
    IconSvg,
  },

  mounted() {
    this.loadAnimation();
    this.isMobileDevice();
    this.mySkill = this.SKILL;
  },

  methods: {
    ...mapActions(["showFullSkill", "showLessSkill"]),
    loadAnimation() {
      Animasection.observeAll();
    },
    isMobileDevice() {
      return isMobilePhone();
    },
    isDesktopDevice() {
      return isDesktop();
    },
    showMoreData() {
      this.skillOne.push({
        name: "Golang",
        icon: "golangicon",
      });
    },
    onChangeFullSkill() {
      this.showFullSkill();
    },
    onChangeLessSkill() {
      this.showLessSkill();
    },
  },

  computed: {
    ...mapGetters(["SKILL"]),
    ...mapGetters(["BUTTON_SHOW"]),
  },
};
</script>