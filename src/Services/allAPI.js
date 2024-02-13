import {commonAPI} from "./commonAPI"
import { SERVER_URL} from "./serverURL"

// register API
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

// getAllUsers API
export const getAllUsersAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/users`,"","")
}