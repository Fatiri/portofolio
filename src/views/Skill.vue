<template>
  <div
    id="skill"
    class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 transform duration-300 opacity-0 translate-y-32 bg-white bg-opacity-5 rounded rounded-xl"
    data-class-in="translate-y-0 opacity-100"
    data-class-out="translate-y-32 opacity-0"
    :class="{ 'mt-10': isMobileDevice(), 'mb-2': isDesktopDevice() }"
  >
    <div
      class="transition card-list-blur-custome pt-8"
      :class="{ 'mt-0': isMobileDevice(), 'mt-1': isDesktopDevice() }"
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
            'grid grid-cols-3': isMobileDevice(),
            'grid grid-cols-6': isDesktopDevice(),
          }"
        >
          <div
            v-for="(skill, index) in SKILL"
            :key="index"
            class="cursor-pointer py-1 w-full flex justify-center items-center transform duration-1000 opacity-0 translate-y-32"
            data-class-in="translate-y-0 opacity-100"
            data-class-out="translate-y-32 opacity-0"
          >
            <div class="rounded w-full">
              <div
                class="duration-4 transform transition duration-500 hover:scale-125"
              >
                <div
                  class="flex flex-row justify-center uppercase font-bold text-white pt-6"
                >
                  <p>{{ skill.name }}</p>
                </div>
                <div class="w-full flex justify-center">
                  <div class="p-2 pb-6 text-grey-darker flex flex-col">
                    <icon-svg
                      :class="{ 'ml-9': skill.icon == 'golangicon' }"
                      class="flex self-center rounded-full shadow-sm"
                      :name="skill.icon"
                      width="100"
                      height="100"
                    />
                    <div
                      :class="{ 'ml-5': skill.icon == 'golangicon' }"
                      class="mt-3 bg-white bg-opacity-10 rounded-full h-10 w-24 items-center flex justify-items-center..."
                    >
                      <p class="w-full text-center text-green-200">
                        {{ skill.percentage }}
                      </p>
                    </div>
                  </div>
                </div>
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
<style scoped>
.card-blur-custome {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}
.card-list-blur-custome {
  filter: blur(0px);
  -webkit-filter: blur(0px);
}
</style>
