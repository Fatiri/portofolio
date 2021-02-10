import Vue from "vue";
import Vuex from "vuex"
import skill from "./module/skill";
import serviceClient from "./module/service_client";
import contact from "./module/contact"


Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    skill,
    serviceClient,
    contact
  }
})