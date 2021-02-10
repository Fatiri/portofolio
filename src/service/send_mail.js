import Axios from "axios"
import { ResponseMessage } from "../utils/response"

export function SendMail(message) {
   return Axios.post(`https://api.emailjs.com/api/v1.0/email/send`, message, {
      headers: {
         "Content-Type": "application/json"
      }

   }).then(res => {
      if (res.status === 200) {
         ResponseMessage("success", "Success Sending message")
         return true
      }
   }).catch(() => {
      ResponseMessage("failed", "Failed Sending message")
      return false
   })
}