import {GETUSERINFO} from "./mutations-type"
export default {
    ['GETUSERINFO'](state,payload){
        state.userImage = payload.avatarUrl
        state.nickName = payload.fox
    }
}