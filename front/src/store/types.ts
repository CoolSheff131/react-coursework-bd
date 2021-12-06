import { UserData } from "../Entities/UserData";

export enum UserActionTypes{
    LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
}

export interface LoginUserAction{
    type: UserActionTypes.LOGIN_USER,
    user: UserData
}
export interface LogoutUserAction{
    type: UserActionTypes.LOGOUT_USER
}
export type UserActions = LoginUserAction | LogoutUserAction