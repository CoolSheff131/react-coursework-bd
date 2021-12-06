import { UserData } from "../../Entities/UserData"
import { UserActions,UserActionTypes } from "../types"


const initialState: UserData = {
    login: '',
    password: '',
    role: ''
}


export const userReducer = (state = initialState, action: UserActions): UserData => {
    switch(action.type){
        case UserActionTypes.LOGIN_USER:
            return action.user
        case UserActionTypes.LOGOUT_USER:
            return {login: '', password: '', role: ''}
        default:
            return state
    }
}