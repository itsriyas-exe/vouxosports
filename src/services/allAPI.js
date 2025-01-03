import {commonApi} from '../services/commonApi'
import {serverUrl} from '../services/serverUrl'
export const registerAPI = async(reqBody)=>{
    return await commonApi('post',`${serverUrl}/api/register`,reqBody,'')
}

export const loginAPI = async(reqBody)=>{
    return await commonApi('post',`${serverUrl}/api/login`,reqBody,'')
}