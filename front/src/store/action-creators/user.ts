import { Dispatch } from "redux"
import { UserData } from "../../Entities/UserData"
import { UserActions, UserActionTypes } from "../types"

export const setUser = (userData: UserData)=>{
    return async (dispatch: Dispatch<UserActions>) => {
            dispatch({type: UserActionTypes.LOGIN_USER,user: userData})   
    }
}

export const unSetUser = ()=>{
    return async (dispatch: Dispatch<UserActions>) => {
        dispatch({type: UserActionTypes.LOGOUT_USER})
    }
}