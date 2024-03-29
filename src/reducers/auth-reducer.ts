import {AppThunk} from "../store/store";

import {errorHandlerUtil} from "../common/utils/errors-utils";

import {setAppStatusAC} from "./app-reducer";

import {AxiosResponse} from "axios";

import {authAPI, LoginParamsType, RegisterParamsType, ResponseAuthMeType} from "../api/api";

const initialState: InitialStateType = {
    isLoggedIn: false,
    appMessageForUser: null as null,
    registerOk: false,
    userRegisterInfo: {} as RegisterParamsType,
    userAuthMeInfo: {} as ResponseAuthMeType
}

export const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET-IS-LOGGED-IN' : {
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        }
        case 'AUTH/SET-APP-MESSAGE-FOR-USER': {
            return {...state, appMessageForUser: action.payload.message}
        }
        case 'AUTH/SET-USER-REGISTRATION-STATUS': {
            return {...state, registerOk: action.payload.isOk}
        }
        case 'AUTH/SET-USER-REGISTRATION-INFO': {
            return {...state, userRegisterInfo: action.payload.info}
        }
        case 'AUTH/SET-USER-AUTH-ME-INFO': {
            console.log(action.payload.info)
            return {...state, userAuthMeInfo: action.payload.info}
        }
        default: {
            return state
        }
    }
}

// action creators
export const setIsLoggedInOutAC = (isLoggedIn: boolean) => {
    return {
        type: 'AUTH/SET-IS-LOGGED-IN',
        payload: {isLoggedIn}
    } as const
}
export const setRegistrationUserInfoAC = (info: RegisterParamsType) => {
    return {
        type: 'AUTH/SET-USER-REGISTRATION-INFO',
        payload: {info}
    } as const
}
export const setUserAuthMeInfoAC = (info: ResponseAuthMeType) => {
    return {
        type: 'AUTH/SET-USER-AUTH-ME-INFO',
        payload: {info}
    } as const
}
export const setAppMessageForUserAC = (message: string | null) => {
    return {
        type: 'AUTH/SET-APP-MESSAGE-FOR-USER',
        payload: {message}
    } as const
}
export const setRegistrationStatusAC = (isOk: boolean) => {
    return {
        type: 'AUTH/SET-USER-REGISTRATION-STATUS',
        payload: {isOk}
    } as const
}

// thunks
export const registrationTC = (data: RegisterParamsType): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await authAPI.register(data)
        dispatch(setRegistrationUserInfoAC(data))
        dispatch(setRegistrationStatusAC(true))
    } catch (e: any) {
        errorHandlerUtil(e, dispatch)
        dispatch(setRegistrationStatusAC(false))
        if (e.response.status === 0) {
            dispatch(setAppMessageForUserAC('Network Error'))
        } else if (e.response.data.errorsMessages.length === 2) {
            dispatch(setAppMessageForUserAC('User with this UserName and Email already exists'))
        } else if (e.response.data.errorsMessages[0].field === "login") {
            dispatch(setAppMessageForUserAC('User with this UserName already exists'))
        } else if (e.response.data.errorsMessages[0].field === "email") {
            dispatch(setAppMessageForUserAC('User with this Email already exists'))
        } else {
            dispatch(setAppMessageForUserAC('Unexpected error'))
        }
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

export const authMeTC = (): AppThunk => async (dispatch) => {
    try {
        const res: AxiosResponse<ResponseAuthMeType> = await authAPI.authMe()
        dispatch(setUserAuthMeInfoAC(res.data))
    } catch (e) {

    } finally {

    }
}

export const loginTC = (data: LoginParamsType): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await authAPI.login(data)
        dispatch(setAppMessageForUserAC(`Welcome ${data.loginOrEmail}!`))
        dispatch(setIsLoggedInOutAC(true))
    } catch (e: any) {
        errorHandlerUtil(e, dispatch)
        console.log(e)
        if (e.response.status === 0) {
            dispatch(setAppMessageForUserAC('Network Error'))
        } else {
            dispatch(setAppMessageForUserAC('The password or email or Username is incorrect. Please try again'))
        }
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

export const registrationConfirmationTC = (data: any): AppThunk => async (dispatch) => {
    try {
        await authAPI.confirmRegistration(data)
    } catch (e: any) {
        // написать тут логику для ситуации, в которой ссылка на почте протухла
        dispatch(setAppMessageForUserAC('Something wrong'))
    }
}

// types
type InitialStateType = {
    isLoggedIn: boolean
    appMessageForUser: string | null
    registerOk: boolean
    userRegisterInfo: RegisterParamsType
    userAuthMeInfo: ResponseAuthMeType
}

export type AuthActionsType =
    | ReturnType<typeof setIsLoggedInOutAC>
    | ReturnType<typeof setAppMessageForUserAC>
    | ReturnType<typeof setRegistrationStatusAC>
    | ReturnType<typeof setUserAuthMeInfoAC>
    | ReturnType<typeof setRegistrationUserInfoAC>
//   |  >>> !