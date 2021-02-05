import {SkillData, SkillDataFull} from '../module/skill_data'

const state = {
   skill : SkillData,
   buttonShow : false
}


const actions = {
   showFullSkill({commit}){
       console.log("masuk");
       commit('SHOW_FULL_SKILL', SkillDataFull);
   },
   showLessSkill({commit}){
    console.log("masuk");
    commit('SHOW_LESS_SKILL', SkillData);
}
}

const mutations = {
    'SHOW_FULL_SKILL'(state, payload){
        state.skill = payload
        state.buttonShow = true
    },
    'SHOW_LESS_SKILL'(state, payload){
        state.skill = payload
        state.buttonShow = false
    }
}

const getters = {
    SKILL: state => {
        return state.skill;
    },
    BUTTON_SHOW:state => {
        return state.buttonShow;
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}