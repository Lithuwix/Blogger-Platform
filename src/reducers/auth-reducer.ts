import {AppThunk} from "../store/store";

import {errorHandlerUtil} from "../common/utils/errors-utils";

import {setAppStatusAC} from "./app-reducer";

import {authAPI, LoginParamsType, RegisterParamsType} from "../api/api";

const initialState: InitialStateType = {
    isLoggedIn: false,
    appErrorMessage: '',
    appMessageForUser: null
}

export const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET-IS-LOGGED-IN' : {
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        }
        case 'AUTH/SET-APP-ERROR': {
            return {...state, appErrorMessage: action.payload.errorMessage}
        }
        case 'AUTH/SET-APP-MESSAGE-FOR-USER': {
            return {...state, appMessageForUser: action.payload.message}
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
export const setAppErrorAC = (errorMessage: string) => {
    return {
        type: 'AUTH/SET-APP-ERROR',
        payload: {errorMessage}
    } as const
}
export const setAppMessageForUserAC = (message: string | null) => {
    return {
        type: 'AUTH/SET-APP-MESSAGE-FOR-USER',
        payload: {message}
    } as const
}

// thunks
export const registrationTC = (data: RegisterParamsType): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await authAPI.register(data)

    } catch (e: any) {
        errorHandlerUtil(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

export const loginTC = (data: LoginParamsType): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await authAPI.login(data)
        dispatch(setAppMessageForUserAC(`Welcome ${data.loginOrEmail}!`))
        dispatch(setIsLoggedInOutAC(true))
    } catch (e: any) {
        dispatch(setAppMessageForUserAC('The password or email or Username is incorrect. Please try again'))
        errorHandlerUtil(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('idle'))
    }
}

// types
type InitialStateType = {
    isLoggedIn: boolean
    appErrorMessage: string
    appMessageForUser: string | null
}

export type AuthActionsType =
    | ReturnType<typeof setIsLoggedInOutAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppMessageForUserAC>
//   |  >>> !