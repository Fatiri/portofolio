
const state = {
    modalProjectDetail: false
}


const actions = {
    showModalProjectDetail({commit}){
        console.log("masuk");
        commit('SHOW_MODAL_PROJECT_DETAIL')
    },
    hideModalProjectDetail({commit}){
        commit('HIDE_MODAL_PROJECT_DETAIL')
    }
}

const mutations = {
    SHOW_MODAL_PROJECT_DETAIL(state){
        state.modalProjectDetail = true
    },
    HIDE_MODAL_PROJECT_DETAIL(state){
        state.modalProjectDetail = false
    }
}

const getters = {
    MODAL_PROJECT_DETAIL: state => {
        return state.modalProjectDetail;
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}