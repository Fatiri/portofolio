import {serviceClientData} from '../module/service_client_data'

const state = {
   serviceClient : serviceClientData,
}


const actions = {
}

const mutations = {
}

const getters = {
    SERVICE_CLIENT: state => {
        return state.serviceClient;
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}