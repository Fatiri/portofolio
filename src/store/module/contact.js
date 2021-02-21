import { SendMail } from "../../service/send_mail"
import { ValidateObjectDataMessage } from "../../utils/validate"

const state = {
    buttonSendStatus: false,
    dataMailJS: {
        service_id: process.env.VUE_APP_SERVICEID_EMAILJS,
        template_id: process.env.VUE_APP_TEMPLATEID_EMAILJS,
        user_id: process.env.VUE_APP_USERID_EMAILJS,
        template_params: {
            name: "",
            email: "",
            subject: "",
            text: "",
        },
    },
    messageInvalidObject: {
        name: "",
        email: "",
        subject: "",
        text: "",
    }
}


const actions = {
    handleInput({ commit }) {
        const validateResult = ValidateObjectDataMessage(state.dataMailJS.template_params)
        const messageInvalidObject = validateResult.message
        commit("SET_MESSAGE_INVALID_OBJECT", messageInvalidObject)
    },
    async handleSendMessage({ commit }) {
        const validateResult = ValidateObjectDataMessage(state.dataMailJS.template_params)
        state.buttonSendStatus = true

        if (validateResult.isAllFilled) {
            const statusSending = await SendMail(state.dataMailJS)
            if (statusSending) {
                const emptyObject = {
                    name: "",
                    email: "",
                    subject: "",
                    text: "",
                }
                commit("RESET_MESSAGE", emptyObject)
            }
        }
        const messageInvalidObject = validateResult.message
        commit("SET_MESSAGE_INVALID_OBJECT", messageInvalidObject)
        state.buttonSendStatus = false
    }
}

const mutations = {
    RESET_MESSAGE(state, payload) {
        state.dataMailJS.template_params = payload
    },
    SET_MESSAGE_INVALID_OBJECT(state, payload) {
        state.messageInvalidObject = payload
    }
}

const getters = {
    BUTTON_SEND_STATUS: state => {
        return state.buttonSendStatus;
    },
    MESSAGE: state => {
        return state.dataMailJS.template_params;
    },
    MESSAGE_INVALID_OBJECT: state => {
        return state.messageInvalidObject;
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}